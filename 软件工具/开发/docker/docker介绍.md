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

## 命令

### docker version

查看 docker 版本

### docker info

查看 docker 信息

### docker images

或`docker image ls`

列出本机所有 image 文件。

### docker rmi imageName[,...]

或`docker image rm imageName[,...]`

移除 image。

### docker pull [组/]imageName

或`docker image pull [组/]imageName`

抓取 image。

默认组名为 library。

### docker build [参数] 路径

或`docker image build [参数] 路径`

创建镜像

参数：

- **-t [REGISTRYHOST/][username/]NAME[:TAG]** 指定名称及标签。默认标签为 latest 。可以指定多个标签

### docker tag [参数] imagename[:TAG] [REGISTRYHOST/][username/]NAME[:TAG]

或`docker image tag [参数] imagename[:TAG] [REGISTRYHOST/][USERNAME/]NAME[:TAG]`

为本地 image 标记 仓库、用户名、标签。

### docker push [参数] [REGISTRYHOST/][username/]NAME[:TAG]

或`docker image push [参数] [REGISTRYHOST/][USERNAME/]NAME[:TAG]`

发布 image。

### docker run [参数] [imageName] [在容器中执行的命令]

或`docker container run [参数] [imageName] [在容器中执行的命令]`

创建并运行容器。如果 image 不存在，会自动 pull image。

参数：

- **-t** 在新容器内指定一个伪终端或终端。通常与`-i`一起使用。
- **-i** 允许你对容器内的标准输入 (STDIN) 进行交互。通常与`-t`一起使用。
- **-d** 后台模式
- **-P** 随机端口映射
- **-p 主机(宿主)端口:容器端口** 指定端口映射
- **--name** 指定容器名称
- **-v,--volume 源目录:容器目录** 进行目录映射
- **--rm** 容器终止运行后，自动删除容器文件
- **--env key=value** 设置环境变量
- **--link 容器名:别名** 添加链接到另一个容器

如果以终端模式运行，可以通过运行`exit`或`ctrl+d`关闭容器。

### docker logs 容器\_id/容器名

或`docker container logs 容器id/容器名`

查看容器输出。

### docker start 容器\_id

或`docker container start 容器id`

启动一个容器。

### docker stop 容器\_id

或`docker container stop 容器id`

停止容器。

它会向容器里面的主进程发出 SIGTERM 信号，然后过一段时间再发出 SIGKILL 信号。

### docker kill 容器\_id

或`docker container kill 容器id`

杀死一个容器。

它会向容器里面的主进程发出 SIGKILL 信号。

它会强行终止，正在进行中的操作可能会丢失。

### docker ps [参数]

或`docker container ls`

查看容器文件。默认只列出正在运行的容器文件

参数：

- **-a,--all** 查看所有（包括未运行）容器文件

### docker rm [参数] 容器\_id[,...]

或`docker container rm [参数] 容器id[,...]`

删除容器

### docker exec [参数] containerid 命令

或`docker container exec [参数] containerid 命令`

在正在运行的容器中执行命令

### docker cp [参数] containerid:路径 源路径 或 docker cp [参数] 源路径 containerid:路径

或

```
docker container cp [参数] containerid:路径 源路径
docker container cp [参数] 源路径 containerid:路径
```

容器和主机之间文件拷贝

### docker login

登录到 image 仓库

## 常见问题

### window 无法启动

- 开启 hyper-v。
- 安装 wsl2。
  - 如果仍出错，执行`netsh winsock reset`，不用重启系统。
- 以管理员身份运行。
