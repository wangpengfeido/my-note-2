# frp 配置

<https://gofrp.org/docs/reference/server-configures/>

## 服务端配置

### 基础配置

- `bind_port` 建立连接用的握手端口。

### HTTP & HTTPS

- `vhost_http_port` 监听 user http 请求的端口。这个端口只是用来监听 user 的请求， cs 通信还是使用`bind_port`。

### 管理配置

- `allow_ports` 允许建立连接的端口。一般来自于 client 的`remote_port`配置。

## 客户端配置

### 基础配置

- `server_port` 服务端等待建立连接握手的端口。

### 本地服务配置

- `local_port` 本地服务实际运行的端口。这个端口是 client 转发到本地服务的端口，不会用它来与 server 通信。

### TCP

- `remote_port` 与 server 通信的端口。这个配置会在 server 开一个 port，与 client 通信，client 再转发到`local_port`。
