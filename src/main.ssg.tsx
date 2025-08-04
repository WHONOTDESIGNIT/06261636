import { ViteSSG } from 'vite-ssg'
import App from './App'
import './index.css'

const routes = []

export const createApp = ViteSSG(
  App,
  { routes },
  () => {
    // 如果后续需要配置，再添加参数
  }
)