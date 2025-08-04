import { ViteSSG } from 'vite-ssg'
import App from './App'
import './index.css'

// `export const createApp` is required for vite-ssg
export const createApp = ViteSSG(
  // The root component
  App
)