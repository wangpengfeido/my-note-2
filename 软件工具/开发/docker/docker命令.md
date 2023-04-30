# docker 命令

<https://docs.docker.com/engine/reference/run/>

## 通用

### docker version

查看 docker 版本

### docker info

查看 docker 信息

### docker login

登录到 image 仓库

## image 相关

### docker images

或`docker image ls`

列出本机所有 image 文件。

### docker run [OPTIONS] IMAGE [COMMAND] [ARG...]

或`docker container run [参数] [imageName] [在容器中执行的命令]`

创建并运行容器。如果 image 不存在，会自动 pull image。

参数：

- `--name` 指定容器名称。
- `-p 主机(宿主)端口:容器端口` 指定端口映射。主机端口即暴露出的端口；容器端口即内部程序监听的端口。
- `-P` 随机端口映射。
- `--env,-e` 设置环境变量。
- `-d` 后台模式。
- `-t` 在新容器内指定一个伪终端或终端。通常与`-i`一起使用。
- `-i` 允许你对容器内的标准输入 (STDIN) 进行交互。通常与`-t`一起使用。
- `--volume,-v 源目录:容器目录` 进行目录映射。
- `--rm` 容器终止运行后，自动删除容器文件。
- `--env key=value` 设置环境变量。
- `--link 源容器名或id:源容器在接收容器中的别名` 添加链接到源容器（被链接的容器）。这实际上是给接受容器的`/etc/hosts`添加解析实现通信。
- `-m, --memory=""` 限制内存。支持单位 b/k/m/g。
- `--cpus=0.000` 限制 cpu 个数。
- `--privileged` 给予容器特权。使容器能做宿主机能做的事情，比如访问共享的系统内核，在容器中运行 docker 等。

如果以终端模式运行，可以通过运行`exit`或`ctrl+d`关闭容器。

### docker rmi [参数] IMAGE [IMAGE...]

移除 image。

参数：

- `--force, -f`。强制删除

### docker build [参数] 上下文路径

或`docker image build [参数] 路径`

创建镜像。

上下文：<https://www.cnblogs.com/FengZeng666/p/16367833.html>

参数：

- `-t [REGISTRYHOST/][username/]NAME[:TAG]` 指定名称及标签。默认标签为 latest 。可以指定多个标签
- `-f 路径`指定 Dockerfile（默认使用目录下的 Dockerfile）。

### docker tag [参数] imagename[:TAG] [REGISTRYHOST/][username/]NAME[:TAG]

或`docker image tag [参数] imagename[:TAG] [REGISTRYHOST/][USERNAME/]NAME[:TAG]`

为本地 image 标记 仓库、用户名、标签。

### docker pull [组/]imageName

或`docker image pull [组/]imageName`

抓取 image。

默认组名为 library。

### docker push [参数] [REGISTRYHOST/][username/]NAME[:TAG]

或`docker image push [参数] [REGISTRYHOST/][USERNAME/]NAME[:TAG]`

发布 image。

### docker save [参数] IMAGE [IMAGE...]

参数：

- `--output, -o` 文件及路径。

### docker load [OPTIONS]

- `--input, -i` 文件及路径。

## container 相关

### docker container ls [OPTIONS]

列出容器 。

参数：

- `--all, -a` 列出所有 container。

### docker container start [OPTIONS] CONTAINER [CONTAINER...]

启动容器。

### docker container stop [OPTIONS] CONTAINER [CONTAINER...]

停止容器。

### docker start 容器\_id

同 docker container start

### docker rm [OPTIONS] CONTAINER [CONTAINER...]

移除容器。

### docker stop 容器\_id

或`docker container stop 容器id`

停止容器。

它会向容器里面的主进程发出 SIGTERM 信号，然后过一段时间再发出 SIGKILL 信号。

### docker kill 容器\_id

或`docker container kill 容器id`

杀死一个容器。

它会向容器里面的主进程发出 SIGKILL 信号。

它会强行终止，正在进行中的操作可能会丢失。

### docker logs 容器\_id/容器名

或`docker container logs 容器id/容器名`

查看容器输出。

### docker ps [参数]

或`docker container ls`

查看容器文件。默认只列出正在运行的容器文件

参数：

- `-a,--all` 查看所有（包括未运行）容器文件

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

### docker export [参数] CONTAINER

参数：

- `--output, -o` 文件及路径。

### docker import [参数] CONTAINER 文件 [REPOSITORY[:TAG]]

参数：
