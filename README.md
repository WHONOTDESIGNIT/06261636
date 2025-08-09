# iShine Manufacturing Website (Next.js + Netlify SSR)

本项目使用 Next.js，部署到 Netlify，采用 SSR（服务器端渲染）。已启用 `@netlify/plugin-nextjs`，相关配置见 `netlify.toml`。

### 运行环境
- Node.js 版本：18（见 `netlify.toml` 的 `NODE_VERSION=18`）
- 包管理：npm

### 本地开发
```bash
npm install
npm run dev
```

### 生产构建（本地）
```bash
# 仅构建（与 Netlify 构建一致）
npm run build

# 构建并本地生成 sitemap（若需要在提交前生成并提交）
npm run deploy
```

说明：`npm run deploy` 会依次执行 `next build` 与 `scripts/generate-sitemap.js`，在本地生成 `public/sitemap*.xml`。如您习惯在本地生成并提交 sitemap（避免占用 Netlify 构建时间），请使用该命令后提交 XML 文件即可。

### 通过 Git 部署到 Netlify（推荐，支持 SSR）
1. 在 Netlify 仪表盘将站点与代码库关联。
2. 无需在 UI 中手动设置 Publish directory；Netlify 会读取仓库中的 `netlify.toml`：
   - `[build] command = "npm run build"`
   - `[[plugins]] package = "@netlify/plugin-nextjs"`
3. 推送到主分支即触发构建发布（或在 Netlify 上手动触发发布）。

注意：SSR 站点不能通过“拖拽静态文件夹”方式部署，`dist`/`out` 等静态目录并不适用本项目。

### 通过 Netlify CLI 部署（可选）
```bash
npm install -g netlify-cli
netlify login
netlify link --id YOUR_SITE_ID
# 触发一次含构建的生产部署（会运行 next build 并打包 Functions/Edge）
netlify deploy --build --prod
```

### 环境变量
- 在 Netlify 仪表盘的 Site settings → Build & deploy → Environment 中配置即可。
- 本仓库不包含 `.env.example`；如需本地变量，请自行创建 `.env.local` 并按需读取。

### 重定向与安全头
- 重定向：`public/_redirects`
- 安全与缓存头：`public/_headers`

### 项目结构（要点）
- `src/` 源码（Next.js `pages` 路由在 `src/pages`）
- `public/` 静态资源与站点地图
- `scripts/` 构建辅助脚本（`generate-sitemap.js`、`check-redirects.js`）
- `netlify.toml` Netlify 构建与插件配置（启用 SSR）

### 可用脚本
```bash
# 开发
npm run dev

# 生产构建（供 Netlify 调用）
npm run build

# 本地启动生产构建（可选）
npm run start

# 生成站点地图（写入 public/）
npm run sitemap

# 本地构建并生成站点地图（提交前一次性完成）
npm run deploy

# 校验重定向链路（可选）
npm run check-redirects
```

### 常见问题
- 构建后出现 404 或 SSR 不生效：确保使用了 `@netlify/plugin-nextjs`，且未将 Publish directory 设置为 `dist`/`out`。
- Node 版本不匹配：在 Netlify 中使用 Node 18，或修改 `netlify.toml` 与之同步。
- 站点地图未更新：按需在本地执行 `npm run sitemap` 后提交生成的 XML 文件，或改为在 CI 中执行。
