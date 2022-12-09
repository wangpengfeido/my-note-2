# kubernetes 命令行工具-kubectl

```
kubectl [flags]
```

相关文档：

- <https://kubernetes.io/zh-cn/docs/reference/kubectl/kubectl/>
- windows 安装：<https://kubernetes.io/zh-cn/docs/tasks/tools/install-kubectl-windows/>
- kubectl 命令参考：<https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands>

## 命令

### get

显示资源。

```
# 显示 pods
get po
get pod
get pods
# 显示 deployments
get deployment
get deployments
```

- `-A` 所有空间。
