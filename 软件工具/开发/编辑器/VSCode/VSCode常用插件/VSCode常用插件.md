# VSCode 常用插件

## 常用插件

[VSCode 常用插件.sh](./VSCode常用插件.sh)

## 如何导出插件列表

unix:

```
code --list-extensions | xargs -L 1 echo code --install-extension
```

windows:

```
code --list-extensions | % { "code --install-extension $_" }
```
