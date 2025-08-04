import { ViteSSG } from 'vite-ssg'
import App from './App'
import './index.css'
import { BrowserRouter } from 'react-router-dom'

// `export const createApp` is required for vite-ssg
export const createApp = ViteSSG(
  // The root component
  App,
  // React Router options
  ({ router, isClient }) => {
    // You can add router configurations here if needed
  },
)