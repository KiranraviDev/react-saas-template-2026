import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './store.ts'
import { RouterProvider, createRouter } from '@tanstack/react-router';
// import { routeTree } from './router/routeTree.ts';

// Create your router instance (example)
const router = createRouter({
  context: {
    routeTree,
    store, // Passing store to context allows route loaders to access Redux state
  },
  defaultPreload: 'intent', // Preloads code when user hovers a link (SaaS standard)
});

// Declare Moudule for React Router
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
