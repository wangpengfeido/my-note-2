# docker 介绍

## 概念

### 容器镜像(image)

Docker 把应用程序及其依赖，打包在 image 文件里面。

docker 通过 image 生成容器实例。image 可以继承。

### 容器文件(container)

image 文件生成的容器实例，本身也是一个文件，称为容器文件。

关闭容器只是容器停止运行，并不会删除容器文件

### Dockerfile

包含 image 配置，用来制作 image 。

```
FROM imagename    # 继承自
COPY . /app    # 将哪些路径拷贝进 image 的哪个目录（排除.dockerignore）
WORKDIR /app    # 工作路径
RUN npm install    # 打包前在工作路径下运行的命令。安装的所有依赖都将打包进 image 文件。
EXPOSE 3000    # 暴露出来的端口
CMD node    # 容器运行时自动执行的命令
```

### .dockerignore

打包 image 时忽略的文件。

## 常见问题

### windows 无法启动

- 开启 hyper-v。
- 安装 wsl2。
  - 如果仍出错，执行`netsh winsock reset`，不用重启系统。
- 以管理员身份运行。

### windows 运行 docker 命令报错

```
error during connect: In the default daemon configuration on Windows, the docker client must be run with elevated privileges to connect.: Get "http://%2F%2F.%2Fpipe%2Fdocker_engine/v1.24/images/json": open //./pipe/docker_engine: The system cannot find the file specified.
```

以管理员身份运行 docker desktop。
