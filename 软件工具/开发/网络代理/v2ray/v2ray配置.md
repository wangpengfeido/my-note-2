# v2ray 配置

```json
{
  // 入站配置。
  "inbounds": [
    {
      // 入站监听端口。
      "port": 30001,
      // 入站协议。
      "protocol": "vmess",
      // 入站协议设置。不同协议配置不同。
      // VMess
      "settings": {
        "clients": [
          {
            // 用户 ID，客户端与服务器必须相同
            "id": "b831381d-6324-4d53-ad4f-8cda48b30811"
          }
        ]
      }
    }
  ]
}
```
