import { Post, Project, Category, Tag } from './types'

const WP_API_URL = process.env.NEXT_PUBLIC_WP_API_URL

if (!WP_API_URL) {
  throw new Error('NEXT_PUBLIC_WP_API_URL is not defined')
}

// Extend the Post type to include _embedded fields
interface PostWithEmbedded extends Post {
  _embedded?: {
    'wp:featuredmedia'?: { source_url: string; alt_text: string }[];
    'wp:term'?: Array<Array<Category | Tag>>;
    author?: Array<{ name: string; link: string }>;
  };
}

export interface PaginationParams {
  page?: number
  per_page?: number
  _fields?: string[]
  search?: string
}

// Cache configuration
const CACHE_TIMES = {
  POSTS: 86400, // 24 hours
  SINGLE_POST: 172800, // 48 hours
  TAGS: 604800, // 7 days
  CATEGORIES: 604800, // 7 days
  PROJECTS: 604800, // 7 days
}

async function fetchAPI<T>(endpoint: string, params: Record<string, string | number> = {}, options: { 
  revalidate?: number | false, 
  tags?: string[] 
} = {}): Promise<T> {
  try {
    const queryString = new URLSearchParams()
    Object.entries(params).forEach(([key, value]) => {
      queryString.append(key, String(value))
    })

    const url = `${WP_API_URL}/wp/v2/${endpoint}/${queryString.toString() ? `?${queryString}` : ''}`
    
    // Determine the endpoint type for default cache settings
    const endpointType = endpoint.includes('posts') 
      ? endpoint.includes('?slug=') ? 'SINGLE_POST' : 'POSTS'
      : endpoint.includes('tags') 
        ? 'TAGS' 
        : endpoint.includes('categories') 
          ? 'CATEGORIES' 
          : endpoint.includes('projects') 
            ? 'PROJECTS' 
            : 'POSTS';
    
    // Set default cache tags based on endpoint
    const defaultTags = [`wp-${endpoint.split('?')[0]}`];
    
    // Fetch with appropriate caching options
    const response = await fetch(url, { 
      next: { 
        // Use provided revalidate value, or default based on endpoint type, or false to force cache
        revalidate: options.revalidate !== undefined 
          ? options.revalidate 
          : CACHE_TIMES[endpointType],
        // Combine default tags with any provided tags
        tags: options.tags ? [...defaultTags, ...options.tags] : defaultTags,
      },
      headers: {
        'Accept': 'application/json',
      }
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error(`API Error (${response.status}):`, errorText)
      throw new Error(`HTTP error! status: ${response.status}`)
    }

    const data = await response.json()
    return data as T
  } catch (error) {
    console.error(`Failed to fetch ${endpoint}:`, error)
    throw new Error(`Failed to fetch ${endpoint}`)
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    const posts = await fetchAPI<PostWithEmbedded[]>('posts', { 
      slug,
      _embed: 'wp:featuredmedia,author,wp:term'
    }, {
      revalidate: CACHE_TIMES.SINGLE_POST,
      tags: [`post-${slug}`]
    });

    if (!posts.length) {
      return null;
    }

    const post = posts[0];
    
    // Process categories and tags if available
    if (post._embedded && post._embedded['wp:term']) {
      const terms = post._embedded['wp:term'];
      // Cast the terms to the correct types
      post.categories = (terms[0] || []) as Category[];
      post.tags = (terms[1] || []) as Tag[];
    }

    return post;
  } catch (error) {
    console.error(`Failed to fetch post with slug ${slug}:`, error);
    return null;
  }
}

// Function to fetch categories by IDs
export async function getCategoriesByIds(categoryIds: number[]): Promise<Category[]> {
  if (!categoryIds || categoryIds.length === 0) return [];
  
  try {
    const categoryPromises = categoryIds.map(id => 
      fetch(`${WP_API_URL}/wp/v2/categories/${id}`, { 
        next: { revalidate: 3600 },
        // Add a timeout to prevent hanging requests
        signal: AbortSignal.timeout(5000) // 5 second timeout
      })
        .then(res => res.ok ? res.json() : null)
        .catch(err => {
          console.error(`Failed to fetch category ${id}:`, err);
          return null;
        })
    );
    
    const categories = await Promise.allSettled(categoryPromises);
    return categories
      .filter(result => result.status === 'fulfilled' && result.value !== null)
      .map(result => {
        const cat = (result as PromiseFulfilledResult<{id: number; name: string; slug: string}>).value;
        return {
          id: cat.id,
          name: cat.name,
          slug: cat.slug
        };
      });
  } catch (error) {
    console.error('Failed to fetch categories:', error);
    return [];
  }
}

// Function to fetch tags by IDs
export async function getTagsByIds(tagIds: number[]): Promise<Tag[]> {
  if (!tagIds || tagIds.length === 0) return [];
  
  try {
    const tagPromises = tagIds.map(id => 
      fetch(`${WP_API_URL}/wp/v2/tags/${id}`, { 
        next: { revalidate: 3600 },
        // Add a timeout to prevent hanging requests
        signal: AbortSignal.timeout(5000) // 5 second timeout
      })
        .then(res => res.ok ? res.json() : null)
        .catch(err => {
          console.error(`Failed to fetch tag ${id}:`, err);
          return null;
        })
    );
    
    const tags = await Promise.allSettled(tagPromises);
    return tags
      .filter(result => result.status === 'fulfilled' && result.value !== null)
      .map(result => {
        const tag = (result as PromiseFulfilledResult<{id: number; name: string; slug: string; count?: number}>).value;
        return {
          id: tag.id,
          name: tag.name,
          slug: tag.slug,
          count: tag.count || 0
        };
      });
  } catch (error) {
    console.error('Failed to fetch tags:', error);
    return [];
  }
}

// Function to get all tags sorted by popularity (count)
export async function getAllTags(limit: number = 10): Promise<Tag[]> {
  try {
    const tags = await fetchAPI<Tag[]>('tags', {
      orderby: 'count',
      order: 'desc',
      per_page: limit
    }, {
      revalidate: CACHE_TIMES.TAGS
    });
    
    return tags.map((tag: { id: number; name: string; slug: string; count?: number }) => ({
      id: tag.id,
      name: tag.name,
      slug: tag.slug,
      count: tag.count || 0
    }));
  } catch (error) {
    console.error('Failed to fetch tags:', error);
    return [];
  }
}

export async function getPosts(params: PaginationParams = {}): Promise<{ posts: Post[]; pagination: { total: number; totalPages: number; currentPage: number; perPage: number } }> {
  try {
    const apiParams: Record<string, string | number> = {};
    
    if (params.per_page) {
      apiParams.per_page = params.per_page;
    }
    
    if (params.page) {
      apiParams.page = params.page;
    }

    if (params._fields) {
      apiParams._fields = params._fields.join(',');
    }

    // Add search parameter if provided
    if (params.search) {
      apiParams.search = params.search;
    }

    // Ensure we get featured media in the response
    apiParams._embed = 'wp:featuredmedia';

    // Determine cache settings based on whether this is a search or not
    const cacheOptions = {
      revalidate: params.search ? 1800 : CACHE_TIMES.POSTS, // Shorter cache for search results
      tags: params.search ? [`wp-posts-search-${params.search}`] : ['wp-posts']
    };

    // Use our fetchAPI function with custom fetch to get headers
    const fetchResponse = await fetch(
      `${WP_API_URL}/wp/v2/posts?${new URLSearchParams(
        Object.entries(apiParams).map(([key, value]) => [key, String(value)])
      ).toString()}`,
      { 
        next: { 
          revalidate: cacheOptions.revalidate,
          tags: cacheOptions.tags
        }
      }
    );

    if (!fetchResponse.ok) {
      throw new Error('Failed to fetch posts');
    }

    // Extract total posts and total pages from headers
    const totalPosts = parseInt(fetchResponse.headers.get('X-WP-Total') || '0', 10);
    const totalPages = parseInt(fetchResponse.headers.get('X-WP-TotalPages') || '0', 10);

    // Get the posts data
    const posts = await fetchResponse.json();

    // Calculate pagination data
    const currentPage = params.page || 1;
    const perPage = params.per_page || 10;

    return {
      posts,
      pagination: {
        total: totalPosts,
        totalPages,
        currentPage,
        perPage
      }
    };
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return { 
      posts: [], 
      pagination: { 
        total: 0, 
        totalPages: 0, 
        currentPage: params.page || 1, 
        perPage: params.per_page || 10 
      } 
    };
  }
}

export async function getProjects(params: PaginationParams = {}): Promise<Project[]> {
  try {
    return await fetchAPI<Project[]>('project', {
      _embed: '1',
      per_page: params.per_page || 9,
      page: params.page || 1
    })
  } catch (error) {
    console.error('Failed to fetch projects:', error)
    return []
  }
}