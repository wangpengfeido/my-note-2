# VSCode 常用插件

## 常用插件

```shell
# 注释更好地展示
code --install-extension aaron-bond.better-comments
# eclipse 热键
code --install-extension alphabotsec.vscode-eclipse-keybindings
# css 颜色展示
code --install-extension bierner.color-info
# gitignore 生成
code --install-extension codezombiech.gitignore
# eslint 支持
code --install-extension dbaeumer.vscode-eslint
# git 增强。展示代码行 git 的提交身份、时间等
code --install-extension eamodio.gitlens
# editor config 代码格式化支持
code --install-extension EditorConfig.EditorConfig
# prettier 插件
code --install-extension esbenp.prettier-vscode
# 自动修改 html 头尾对应标签
code --install-extension formulahendry.auto-rename-tag
# 运行代码
code --install-extension formulahendry.code-runner
# github 主题
code --install-extension GitHub.github-vscode-theme
# go 语言支持
code --install-extension golang.go
# todo tree 展示
code --install-extension Gruntfuggly.todo-tree
# yaml 与 json 互相转换
code --install-extension hilleer.yaml-plus-json
# AppleScript 支持
code --install-extension idleberg.applescript
# 快速搜索 node_modules 文件
code --install-extension jasonnutter.search-node-modules
# svg 图片展示与编辑
code --install-extension jock.svg
# styled-components 支持
code --install-extension jpoissonnier.vscode-styled-components
# graphQL 支持
code --install-extension kumar-harsh.graphql-for-vscode
# git 图展示
code --install-extension mhutchie.git-graph
# .env 文件支持
code --install-extension mikestead.dotenv
# python 语言支持
code --install-extension ms-python.python
# python 语言支持
code --install-extension ms-python.vscode-pylance
# ssh 支持
code --install-extension ms-vscode-remote.remote-ssh
# ssh 配置文件
code --install-extension ms-vscode-remote.remote-ssh-edit
# C/C++ 语言支持
code --install-extension ms-vscode.cpptools
# vue 支持
code --install-extension octref.vetur
# 静态资源服务
code --install-extension ritwickdey.LiveServer
# 更多复制选项。可复制不带样式的文字。
code --install-extension salbert.copy-text
# markdown 预览增强
code --install-extension shd101wyy.markdown-preview-enhanced
# 拼写检查
code --install-extension streetsidesoftware.code-spell-checker
# style lint 支持
code --install-extension stylelint.vscode-stylelint
# sass 支持
code --install-extension syler.sass-indented
# 在浏览器中打开文件
code --install-extension techer.open-in-browser
# vscode 图标主题
code --install-extension vscode-icons-team.vscode-icons
# todo 高亮
code --install-extension wayou.vscode-todo-highlight
# one dark pro 主题
code --install-extension zhuangtongfa.material-theme
# 跳转到 github
code --install-extension ziyasal.vscode-open-in-github
```

## 如何导出插件列表

unix:

```
code --list-extensions | xargs -L 1 echo code --install-extension
```

windows:

```
code --list-extensions | % { "code --install-extension $_" }
```
