# GitHub Pages 发布说明

这个文件夹已经是可直接发布的版本。

## 你要上传的内容

把当前文件夹里的所有内容上传到 GitHub 仓库根目录：

- `index.html`
- `assets/`
- `_shared/`
- `.nojekyll`

## 最快发布步骤

1. 在 GitHub 新建一个公开仓库，例如 `2026h1-viz-pages`
2. 点 `Add file` -> `Upload files`
3. 把这个文件夹里的全部文件拖进去
4. 提交后进入 `Settings` -> `Pages`
5. `Build and deployment` 里选择:
   - `Source`: `Deploy from a branch`
   - `Branch`: `main`
   - `Folder`: `/ (root)`
6. 保存后等待几分钟

## 访问链接格式

如果你的 GitHub 用户名是 `yourname`，仓库名是 `2026h1-viz-pages`

那么链接就是：

`https://yourname.github.io/2026h1-viz-pages/`

## 注意

- `.nojekyll` 不能删，否则 `_shared/` 目录可能不会被正常发布
- 如果你更新内容，重新上传覆盖同名文件即可
