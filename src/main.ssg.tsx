import { ViteSSG } from 'vite-ssg'
import App from './App'
import './index.css'

const routes = []

// `export const createApp` is required for vite-ssg
export const createApp = ViteSSG(
  // The root component
  App,
  { routes },
  ({ app, router, routes, isClient, initialState }) => {
    // configure your app
  }
)