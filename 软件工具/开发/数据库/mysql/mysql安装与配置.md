# mysql 安装与配置

## 安装

#### linux 二进制版

1. 安装前置：libnuma,libaio
1. 下载软件包并解压。如：`mysql-8.0.17-linux-glibc2.12-x86_64.tar.xz`
1. 添加使用的用户和用户组。`groupadd mysql`,`useradd -g mysql mysql`
1. 改变目录所有者为 mysql 用户。`chown -R mysql .`
1. 复制文件,`cp ./lib/libssl.so.1.0.0  ./bin`,`cp ./lib/libcrypto.so.1.0.0  ./bin`
1. 初始化，`./bin/mysqld --initialize --user=mysql`。**注意：要记好初始密码**
1. 配置配置文件。
1. 启动服务。`./bin/mysqld`

## 其他

#### 配置文件位置

使用`mysql --help`命令可查看配置文件的位置。默认如下：

- /etc/mysql/my.cnf
