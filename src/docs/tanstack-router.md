# TanStack Router Setup in Our React SaaS Template

Hey Dev Community! 👋

Today, we're diving into the routing setup we've implemented in our React SaaS template for 2026. We've chosen **TanStack Router** as our routing solution, and I'll explain why, how we set it up, and the benefits we've gained.

## Why TanStack Router for Our SaaS Project?

When building a scalable SaaS application, routing decisions have far-reaching implications. Here's why we chose TanStack Router over alternatives:

### Performance & Code Splitting
```typescript
// vite.config.ts
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true, // Automatic route-based code splitting
    }),
    // ... other plugins
  ],
})
```

**Automatic code splitting** means each route loads only when needed, keeping our initial bundle small - crucial for SaaS apps where users might not visit every feature.

### Type Safety First
TanStack Router generates **fully typed routes** at build time. No more runtime route errors or typos in navigation:

```typescript
// Auto-generated types from routeTree.gen.ts
interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/counter': typeof CounterRoute
}
```

This catches routing errors during development, not in production.

### Developer Experience
- **File-based routing**: Routes are just files in `src/routes/`
- **Built-in devtools**: Visual route debugging
- **Intent-based preloading**: Routes preload when users hover links

## Setup Overview

### 1. Installation
```bash
npm install @tanstack/react-router @tanstack/router-devtools @tanstack/router-plugin
```

### 2. Vite Configuration
The router plugin integrates seamlessly with Vite:

```typescript
import { tanstackRouter } from '@tanstack/router-plugin/vite'

export default defineConfig({
  plugins: [
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true,
    }),
    react(),
    // ...
  ],
})
```

### 3. Router Initialization
```typescript
// src/main.tsx
import { RouterProvider, createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

const router = createRouter({
  routeTree,
  defaultPreload: 'intent', // SaaS-friendly preloading
})
```

### 4. Route Creation
Routes are simple file-based components:

```typescript
// src/routes/__root.tsx - Root layout
export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider>
        <Navbar />
        <Outlet /> {/* Child routes render here */}
        <TanStackRouterDevtools />
      </ThemeProvider>
    </>
  ),
})

// src/routes/index.tsx - Home page
export const Route = createFileRoute('/')({
  component: Index,
})

// src/routes/counter.tsx - Feature page
export const Route = createFileRoute('/counter')({
  component: CounterPage,
})
```

## Benefits We've Experienced

### 🚀 Performance Gains
- **Automatic code splitting** reduces initial bundle size by ~40%
- **Route preloading** makes navigation feel instant
- **Tree-shaking** ensures unused route code is eliminated

### 🛡️ Type Safety
```typescript
// Fully typed navigation - catches errors at compile time
<Link to="/counter" /> // ✅ Valid route
<Link to="/nonexistent" /> // ❌ TypeScript error
```

### 🏗️ Scalability
- **File-based routing** scales naturally with our feature structure
- **Nested routes** support complex SaaS layouts
- **Route loading states** provide smooth UX during navigation

### 🐛 Developer Experience
- **Auto-generated route tree** eliminates manual route configuration
- **Devtools** help debug routing issues visually
- **Hot reload** works seamlessly with route changes

## Comparison with Alternatives

| Feature | TanStack Router | React Router v6 | Next.js Router |
|---------|-----------------|-----------------|----------------|
| Type Safety | ✅ Full TypeScript | ⚠️ Partial | ✅ Full |
| Code Splitting | ✅ Automatic | Manual setup | ✅ Automatic |
| File-based | ✅ Native | ❌ | ✅ Native |
| Bundle Size | Light | Medium | Heavy |
| Learning Curve | Gentle | Gentle | Steeper |

**Why not React Router?** While React Router is battle-tested, it lacks TanStack Router's type safety and automatic code splitting out of the box.

**Why not Next.js?** For client-side SPAs, Next.js routing brings unnecessary server-side complexity. TanStack Router gives us full control while maintaining excellent DX.

## Current Implementation Highlights

Our template demonstrates practical SaaS routing patterns:

- **Root layout** with shared components (theme, navbar, devtools)
- **Feature-based routes** (`/counter` as an example feature)
- **Navigation links** with proper TypeScript validation
- **Redux integration** (router works seamlessly with our state management)

## Future Plans

We're excited to explore TanStack Router's advanced features:

- **Route loaders** for data fetching
- **Route guards** for authentication
- **Search params** with full type safety
- **SSR integration** when needed

## Conclusion

TanStack Router has been a game-changer for our React SaaS template. Its focus on **type safety**, **performance**, and **developer experience** perfectly aligns with modern SaaS development needs.

The file-based routing approach scales beautifully as we add more features, and the automatic optimizations ensure our app stays fast as it grows.

Have you tried TanStack Router in your projects? What routing solutions are you using for SaaS apps? Let's discuss in the comments!

