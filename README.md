# iShine Manufacturing Website

## 环境要求

- **Node.js**: 18.x
- **npm**: >=8.0.0

## 部署到现有Netlify项目

### 方法1: 通过Netlify CLI部署到现有项目

1. **安装Netlify CLI:**
npm install -g netlify-cli

text

2. **登录Netlify:**
netlify login

text

3. **链接到现有项目:**
netlify link --id YOUR_SITE_ID

text

4. **部署到现有项目:**
netlify deploy --prod

text

### 方法2: 通过Git连接现有Netlify项目

1. **在Netlify Dashboard中:**
   - 进入您的现有项目 (iplmanufacturer.com)
   - 点击 "Site settings" → "Build & deploy"
   - 在 "Repository" 部分点击 "Link repository"
   - 连接到您的Git仓库

2. **配置构建设置:**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - **Node version: `18`** ⚠️ **重要：必须设置为18**

### 方法3: 手动上传到现有项目

1. **构建项目:**
npm run build

text

2. **在Netlify Dashboard中:**
   - 进入您的现有项目
   - 点击 "Deploys" 标签
   - 将 `.next` 文件夹拖拽到部署区域

### 获取您的Netlify Site ID

1. **在Netlify Dashboard中:**
   - 进入您的项目 (iplmanufacturer.com)
   - 点击 "Site settings"
   - 在 "General" → "Site details" 中找到 "Site ID"

2. **通过CLI获取:**
netlify sites:list

text

### 环境变量配置

复制 `.env.example` 为 `.env` 并填入您的配置：
cp .env.example .env

text

## 项目结构

- `src/` - 源代码
- `public/` - 静态资源
- `scripts/` - 构建脚本
- `.next/` - Next.js 构建输出目录

## 开发命令

安装依赖（推荐使用ci确保版本一致性）
npm ci

开发服务器
npm run dev

构建项目
npm run build

生成sitemap
npm run sitemap

构建并生成sitemap
npm run build:sitemap

部署准备
npm run deploy

text

## 技术栈

- **Next.js**: 15.4.5
- **React**: 18.3.1
- **TypeScript**: 5.3.3
- **Tailwind CSS**: 3.4.1
- **Framer Motion**: 10.12.16

## 部署注意事项

⚠️ **重要提醒**：
- 确保本地和Netlify都使用 **Node.js 18.x**
- 使用 `npm ci` 而不是 `npm install` 确保依赖版本一致性
- 项目已锁定所有依赖版本，避免版本冲突
- 构建目录为 `.next`，不是 `dist`

## 故障排除

如果遇到构建失败：

1. **清理并重新安装依赖:**
rm -rf node_modules package-lock.json .next
npm install

text

2. **本地测试构建:**
npm run build

text

3. **确认Node.js版本:**
node --version # 应该显示 v18.x.x

text

## 部署流程

### 首次部署
1. 确保本地Node.js版本为18.x
2. 清理并重新安装依赖：`npm ci`
3. 本地测试构建：`npm run build`
4. 提交所有更改到Git仓库
5. 在Netlify中配置正确的构建设置

### 后续部署
1. 提交代码更改
2. Netlify自动触发构建和部署

## 常见问题

**Q: 构建失败显示TypeScript错误？**
A: 确保已完全移除react-router-dom依赖，并检查代码中是否有路由相关的错误引用。

**Q: 依赖版本冲突？**
A: 删除node_modules和package-lock.json，然后运行npm install重新生成锁定文件。

**Q: Netlify构建超时？**
A: 检查netlify.toml配置，确保Node.js版本设置为18。