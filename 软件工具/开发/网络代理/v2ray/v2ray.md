# v2ray

<https://www.v2fly.org/>

<https://guide.v2fly.org/>

## 命令

### v2ray

```
v2ray [-version] [-test] [-config=config.json] [-format=json]
```

- `-test` 测试配置文件的有效性，不运行主程序。
- `-config=config.json` 配置文件路径。如果不指定，则使用全局变量`v2ray.location.asset`指定的路径。`v2ray.service`默认配置是`/usr/local/etc/v2ray/config.json`。

### v2ray uuid

生成 UUID。
