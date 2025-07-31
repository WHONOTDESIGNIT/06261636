# iShine Manufacturing Website

## 部署到现有Netlify项目

### 方法1: 通过Netlify CLI部署到现有项目

1. **安装Netlify CLI:**
```bash
npm install -g netlify-cli
```

2. **登录Netlify:**
```bash
netlify login
```

3. **链接到现有项目:**
```bash
netlify link --id YOUR_SITE_ID
```

4. **部署到现有项目:**
```bash
netlify deploy --prod
```

### 方法2: 通过Git连接现有Netlify项目

1. **在Netlify Dashboard中:**
   - 进入您的现有项目 (iplmanufacturer.com)
   - 点击 "Site settings" → "Build & deploy"
   - 在 "Repository" 部分点击 "Link repository"
   - 连接到您的Git仓库

2. **配置构建设置:**
   - Build command: `npm run build:sitemap`
   - Publish directory: `dist`
   - Node version: `18`

### 方法3: 手动上传到现有项目

1. **构建项目:**
```bash
npm run build:sitemap
```

2. **在Netlify Dashboard中:**
   - 进入您的现有项目
   - 点击 "Deploys" 标签
   - 将 `dist` 文件夹拖拽到部署区域

### 获取您的Netlify Site ID

1. **在Netlify Dashboard中:**
   - 进入您的项目 (iplmanufacturer.com)
   - 点击 "Site settings"
   - 在 "General" → "Site details" 中找到 "Site ID"

2. **通过CLI获取:**
```bash
netlify sites:list
```

### 环境变量配置

复制 `.env.example` 为 `.env` 并填入您的配置：
```bash
cp .env.example .env
```

## 项目结构

- `src/` - 源代码
- `public/` - 静态资源
- `scripts/` - 构建脚本
- `dist/` - 构建输出目录

## 开发命令

```bash
# 开发服务器
npm run dev

# 构建项目
npm run build

# 生成sitemap
npm run sitemap

# 构建并生成sitemap
npm run build:sitemap

# 部署准备
npm run deploy
```
