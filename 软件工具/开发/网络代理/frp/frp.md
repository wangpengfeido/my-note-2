# frp

<https://gofrp.org/>

## 使用 systemd 管理

在`/etc/systemd/system`下创建文件`frps.service`或`frpc.service`。

```
[Unit]
# 服务名称，可自定义
Description = frp server
After = network.target syslog.target
Wants = network.target

[Service]
Type = simple
# 启动 frp 的命令，需修改为您的 frp 的安装路径
ExecStart = frps -c /path/to/frps.ini

[Install]
WantedBy = multi-user.target
```
