# React SaaS Template 2026

A production-ready React template for modern SaaS applications, featuring the latest technologies and best practices for scalable development.

## 🚀 Tech Stack

- **Frontend**: React 19, TypeScript, Vite
- **Routing**: TanStack Router (file-based)
- **State Management**: Redux Toolkit + RTK Query
- **Styling**: Tailwind CSS + shadcn/ui components
- **Build Tool**: Vite with optimized production builds
- **Linting**: ESLint with TypeScript support

## ✨ Key Features

- Modern React 19 with concurrent features
- Type-safe routing and navigation
- Centralized state management with Redux
- Efficient API integration with RTK Query
- Comprehensive UI component library
- Dark/Light theme support
- Responsive design
- Production-ready build configuration

## 🏁 Quick Start

```bash
# Clone repository
git clone https://github.com/KiranraviDev/react-saas-template-2026.git
cd react-saas-template-2026

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📁 Project Structure

```
src/
├── components/     # UI components (shadcn/ui + custom)
├── features/       # Feature modules (counter, auth, etc.)
├── lib/           # Utilities and configurations
├── routes/        # Page components (file-based routing)
├── services/      # API services and RTK Query
├── store/         # Redux store and hooks
└── assets/        # Static assets
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Development server with HMR
- `npm run build` - Production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Setup

Create `.env` file for configuration:

```env
VITE_API_BASE_URL=https://api.yoursaas.com
VITE_APP_ENV=development
```

## 🎯 Usage

### Adding New Features

1. Create feature directory in `src/features/`
2. Add Redux slice for state management
3. Create components and route files
4. Update store configuration

### API Integration

Configure RTK Query in `src/services/api-slice.ts`:

```typescript
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  endpoints: (builder) => ({
    // Define your endpoints
  }),
});
```

## 🤝 Contributing

### Branch Strategy
- `main` - Production branch
- `develop` - Development branch
- `feature/*` - Feature branches
- `hotfix/*` - Hotfix branches

### Pull Request Process
1. Create feature branch from `develop`
2. Make changes with proper commits
3. Ensure tests pass and linting is clean
4. Create PR to `develop` branch
5. Code review and merge

### Code Standards
- Use TypeScript for all new code
- Follow ESLint configuration
- Write meaningful commit messages
- Add tests for new features

## 📋 Repository Management

### Issue Templates
Use GitHub issue templates for:
- Bug reports
- Feature requests
- Documentation improvements
- Security issues

### Labels
- `bug` - Bug fixes
- `enhancement` - New features
- `documentation` - Documentation updates
- `breaking-change` - Breaking changes
- `good-first-issue` - Beginner-friendly issues

### Release Process
1. Merge to `main` branch
2. Create GitHub release with version tag
3. Update changelog
4. Deploy to production

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 🙏 Credits

Built with modern web technologies for scalable SaaS development.