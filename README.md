# 🚀 Madebyaris.com - Open Source Portfolio

✨ A modern, high-performance personal portfolio built with cutting-edge web technologies. Showcasing professional skills, projects, and technical expertise.

## 🌟 Features

### 🎨 Stunning Visuals
- 🌓 Dark/Light mode with system preference
- ✨ Aurora background animations
- 🎆 Sparkles effects
- 🖼️ Responsive image optimization

### ⚡ Performance
- 🚀 Next.js 15 with Turbopack
- 📦 Optimized bundle size
- ⏱️ Instant page transitions
- 📊 Vercel Speed Insights

### 🛠️ Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + Tailwind Animate
- **UI Components**: Radix UI + Shadcn UI
- **Animations**: Framer Motion
- **CMS**: WordPress REST API
- **Fonts**: Geist + Plus Jakarta Sans

### 📚 Content Management
- 🖋️ Blog posts integration
- 🏗️ Projects showcase
- 🔗 Custom post types
- 🔄 Automatic content revalidation

## 🛠️ Development Setup

### 📋 Prerequisites
- Node.js v20+
- pnpm v9.15.3+

### 🚀 Quick Start
```bash
# Clone repository
git clone https://github.com/madebyaris/madebyaris.com.git
cd madebyaris.com

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### 🔧 Environment Variables
Create `.env.local` with:
```bash
NEXT_PUBLIC_WP_API_URL="your-wordpress-api-url"
RESEND_API_KEY="your-resend-api-key"
```

### 📧 Contact Form
- 📨 Secure email submission via Resend
- 🔒 Rate limiting protection
- ✅ Input validation
- 🚦 Real-time form status

## 📦 Scripts
| Command       | Description                          |
|---------------|--------------------------------------|
| `pnpm dev`    | Start development server             |
| `pnpm build`  | Create production build              |
| `pnpm start`  | Start production server              |
| `pnpm start:standalone` | Start standalone server (for production with `output: standalone`) |
| `pnpm lint`   | Run ESLint                           |
| `pnpm format` | Format code with Prettier            |

## 🏗️ Project Structure
```
madebyaris.com/
├── app/                # App router pages
│   ├── about/          # About page
│   ├── blog/           # Blog section
│   ├── projects/       # Projects showcase
│   └── contact/        # Contact page
├── components/         # Reusable components
├── lib/                # Utilities and API clients
├── public/             # Static assets
└── styles/             # Global styles
```

## 🌐 Deployment
### Recommended Platforms:
- 🚀 [Vercel](https://vercel.com)
- 🕸️ [Netlify](https://netlify.com)
- ☁️ [Cloudflare Pages](https://pages.cloudflare.com)

### Standalone Deployment
This project uses Next.js's `output: standalone` configuration for optimized production deployments:

1. Build the application:
   ```bash
   pnpm build
   ```

2. Run the standalone server:
   ```bash
   pnpm start:standalone
   ```

3. For Docker deployments, copy the standalone output:
   ```bash
   # Example Dockerfile
   FROM node:20-alpine
   WORKDIR /app
   COPY .next/standalone ./
   COPY .next/static ./.next/static
   COPY public ./public
   EXPOSE 3000
   CMD ["node", "server.js"]
   ```

> **Note:** When using `output: standalone`, do not use `next start`. Instead, use `node .next/standalone/server.js` or the provided `pnpm start:standalone` script.

## 🤝 Contributing
We welcome contributions! Please follow these steps:
1. 🍴 Fork the repository
2. 🌿 Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. 💾 Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. 📤 Push to branch (`git push origin feature/AmazingFeature`)
5. 🔀 Open a Pull Request

## 📜 License
MIT License - See [LICENSE](LICENSE) for more information.

## 📬 Contact
Aris - [arissetia.m@gmail.com](mailto:arissetia.m@gmail.com)

**Project Link**: [https://github.com/madebyaris/madebyaris.com](https://github.com/madebyaris/madebyaris.com)

## 🙏 Acknowledgments
- [Next.js](https://nextjs.org/) - The React Framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - Primitives for building UIs
- [Shadcn UI](https://ui.shadcn.com/) - Beautifully designed components
- [Framer Motion](https://www.framer.com/motion/) - Animation library

## Incremental Static Regeneration (ISR)

This project uses Next.js 15's Incremental Static Regeneration (ISR) to optimize performance while keeping content fresh.

### How ISR Works in This Project

1. **Static Generation with Revalidation**:
   - Pages are statically generated at build time
   - Content is automatically revalidated after a specified time period (60 seconds by default)
   - Stale content is served while revalidation happens in the background

2. **Cache Tags**:
   - We use cache tags (`wp-posts`, `wp-projects`, etc.) to target specific content for revalidation
   - This allows for more granular control over what gets revalidated

3. **On-Demand Revalidation**:
   - The `/api/revalidate` endpoint allows for on-demand revalidation of specific content
   - This is useful for webhooks from WordPress when content changes

### Using the Revalidation API

To revalidate content on-demand, make a POST request to the revalidation API:

```bash
curl -X POST "https://yourdomain.com/api/revalidate?secret=your-secret-token&tag=wp-posts"
```

Parameters:
- `secret`: Your revalidation secret token (set in environment variables)
- `tag`: The cache tag to revalidate (e.g., `wp-posts`, `wp-projects`)

### WordPress Webhook Setup

To automatically revalidate content when it changes in WordPress, set up a webhook:

1. Install a webhook plugin in WordPress
2. Configure it to send a POST request to your revalidation endpoint when content is published or updated
3. Include your secret token and the appropriate tag

Example webhook URL:
```
https://yourdomain.com/api/revalidate?secret=your-secret-token&tag=wp-posts
```

### Environment Variables

Make sure to set these environment variables:
- `NEXT_PUBLIC_WP_API_URL`: Your WordPress API URL
- `REVALIDATION_SECRET`: A secret token for the revalidation API
