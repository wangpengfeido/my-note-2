# wsl2

## 介绍

WSL：Windows Subsystem for Linux。

相关文档：<https://learn.microsoft.com/zh-cn/windows/wsl/>

## 安装

```
wsl --install -d <DistributionName>
```

## 卸载

### 卸载 linux 发行版

```
wsl --unregister <DistributionName>
```

参考：<https://learn.microsoft.com/zh-cn/windows/wsl/basic-commands#unregister-or-uninstall-a-linux-distribution>

### 卸载旧版本

```
wsl --unregister Legacy
```

参考:<https://learn.microsoft.com/zh-cn/windows/wsl/troubleshooting#uninstall-legacy-version-of-wsl>

## 命令

### wsl --list

列出已安装的 linux 发行版。

### wsl --list --online

列出线上可用的 linux 发行版。

### wsl --update

更新 wsl 内核。
