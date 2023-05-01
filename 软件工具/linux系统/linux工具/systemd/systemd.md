# systemd

<https://systemd.io/>

<https://github.com/systemd/systemd>

<http://www.ruanyifeng.com/blog/2016/03/systemd-tutorial-commands.html>

历史上，使用 init 进程管理启动服务。Systemd 取代 init 成为 PID 为 1 的进程。解决了 init 串行启动和启动脚本复杂的问题。

## 主要命令

```bash
# 查看版本
systemctl --version
```

### systemctl

`systemctl` 是 Systemd 的主命令，用于管理系统。

```bash
# 重启系统
systemctl reboot

# 关闭系统，切断电源
systemctl poweroff

# CPU停止工作
systemctl halt

# 暂停系统
systemctl suspend

# 让系统进入冬眠状态
systemctl hibernate

# 让系统进入交互式休眠状态
systemctl hybrid-sleep

# 启动进入救援状态（单用户状态）
systemctl rescue
```

### systemd-analyze

`systemd-analyze`命令用于查看启动耗时。

```bash
# 查看启动耗时
systemd-analyze

# 查看每个服务的启动耗时
systemd-analyze blame

# 显示瀑布状的启动过程流
systemd-analyze critical-chain

# 显示指定服务的启动流
systemd-analyze critical-chain atd.service
```

### hostnamectl

`hostnamectl` 命令用于查看当前主机的信息。

```bash
# 显示当前主机的信息
hostnamectl

# 设置主机名。
hostnamectl set-hostname rhel7
```

### localectl

`localectl`命令用于查看本地化设置。

```bash
# 查看本地化设置
localectl

# 设置本地化参数。
localectl set-locale LANG=en_GB.utf8
localectl set-keymap en_GB
```

### timedatectl

`timedatectl`命令用于查看当前时区设置。

```bash
# 查看当前时区设置
timedatectl

# 显示所有可用的时区
timedatectl list-timezones

# 设置当前时区
timedatectl set-timezone America/New_York
timedatectl set-time YYYY-MM-DD
timedatectl set-time HH:MM:SS
```

### loginctl

`loginctl`命令用于查看当前登录的用户。

```bash
# 列出当前session
loginctl list-sessions

# 列出当前登录用户
loginctl list-users

# 列出显示指定用户的信息
loginctl show-user wangpengfei
```

## unit

Systemd 可以管理所有系统资源。系统资源统称为 Unit。

- Service unit：系统服务
- Target unit：多个 Unit 构成的一个组
- Device Unit：硬件设备
- Mount Unit：文件系统的挂载点
- Automount Unit：自动挂载点
- Path Unit：文件或路径
- Scope Unit：不是由 Systemd 启动的外部进程
- Slice Unit：进程组
- Snapshot Unit：Systemd 快照，可以切回某个快照
- Socket Unit：进程间通信的 socket
- Swap Unit：swap 文件
- Timer Unit：定时器

### systemctl list-unit

`systemctl list-units`命令可以查看当前系统的所有 Unit 。

```bash
# 列出正在运行的 Unit
systemctl list-units

# 列出所有Unit，包括没有找到配置文件的或者启动失败的
systemctl list-units --all

# 列出所有没有运行的 Unit
systemctl list-units --all --state=inactive

# 列出所有加载失败的 Unit
systemctl list-units --failed

# 列出所有正在运行的、类型为 service 的 Unit
systemctl list-units --type=service
```

### unit 状态

`systemctl status`命令用于查看系统状态和单个 Unit 的状态。

```bash
# 显示系统状态
systemctl status

# 显示单个 Unit 的状态
systemctl status bluetooth.service

# 显示远程主机的某个 Unit 的状态
systemctl -H root@wangpengfei.example.com status httpd.service
```

还有了三个查询状态的简单方法。

```bash
# 显示某个 Unit 是否正在运行
systemctl is-active application.service

# 显示某个 Unit 是否处于启动失败状态
systemctl is-failed application.service

# 显示某个 Unit 服务是否建立了启动链接
systemctl is-enabled application.service
```

### unit 管理

```bash
# 立即启动一个服务
systemctl start apache.service

# 立即停止一个服务
systemctl stop apache.service

# 重启一个服务
systemctl restart apache.service

# 杀死一个服务的所有子进程
systemctl kill apache.service

# 重新加载一个服务的配置文件
systemctl reload apache.service

# 重载所有修改过的配置文件
systemctl daemon-reload

# 显示某个 Unit 的所有底层参数
systemctl show httpd.service

# 显示某个 Unit 的指定属性的值
systemctl show -p CPUShares httpd.service

# 设置某个 Unit 的指定属性
systemctl set-property httpd.service CPUShares=500
```

### unit 依赖关系

A 依赖于 B，就意味着 Systemd 在启动 A 的时候，同时会去启动 B。

```bash
# 列出 unit 的所有依赖
systemctl list-dependencies nginx.service
# 包含 Target 类型
systemctl list-dependencies --all nginx.service
```

## unit 配置文件

每一个 unit 都有一个配置文件，告诉 systemd 怎么启动这个 unit 。

systemd 默认从目录`/etc/systemd/system/`读取配置文件，里面存放的大部分文件都是符号链接，指向目录`/usr/lib/systemd/system/`，真正的配置文件存放在这个目录。

配置文件的后缀名，就是 unit 的种类。

### unit 配置文件符号链接

```bash
# 建立符号链接
systemctl enable clamd@scan.service
# 等同于
ln -s '/usr/lib/systemd/system/clamd@scan.service' '/etc/systemd/system/multi-user.target.wants/clamd@scan.service'
```

**如果配置文件里面设置了开机启动，`systemctl enable`命令相当于激活开机启动。**

```
# 删除符号链接
systemctl disable clamd@scan.service
```

### unit 配置文件状态

```bash
# 列出所有配置文件状态
systemctl list-unit-files

# 列出指定类型的配置文件状态
systemctl list-unit-files --type=service

# 列出某一个服务的配置文件状态
systemctl list-unit-files bluetooth.service
```

配置文件状态：

- enabled：已建立启动链接
- disabled：没建立启动链接
- static：该配置文件没有[Install]部分（无法执行），只能作为其他配置文件的依赖
- masked：该配置文件被禁止建立启动链接

### unit 配置文件格式

```bash
# 查看配置文件内容
systemctl cat atd.service
```

配置文件中，方括号表示配置区块名，配置区块中是`=`连接的 kv 值。区块与 kv 值列表见<https://www.freedesktop.org/software/systemd/man/systemd.unit.html>。

---

`[Unit]`区块通常是配置文件的第一个区块，用来定义 unit 的元数据，以及配置与其他 Unit 的关系。

- Description：简短描述
- Documentation：文档地址
- Requires：当前 Unit 依赖的其他 Unit，如果它们没有运行，当前 Unit 会启动失败
- Wants：与当前 Unit 配合的其他 Unit，如果它们没有运行，当前 Unit 不会启动失败
- BindsTo：与 Requires 类似，它指定的 Unit 如果退出，会导致当前 Unit 停止运行
- Before：如果该字段指定的 Unit 也要启动，那么必须在当前 Unit 之后启动
- After：如果该字段指定的 Unit 也要启动，那么必须在当前 Unit 之前启动
- Conflicts：这里指定的 Unit 不能与当前 Unit 同时运行
- Condition...：当前 Unit 运行必须满足的条件，否则不会运行
- Assert...：当前 Unit 运行必须满足的条件，否则会报启动失败

`[Install]`通常是配置文件的最后一个区块，用来定义如何启动，以及是否开机启动。

- WantedBy：它的值是一个或多个 Target，当前 Unit 激活时（enable）符号链接会放入/etc/systemd/system 目录下面以 - - Target 名 + .wants 后缀构成的子目录中
- RequiredBy：它的值是一个或多个 Target，当前 Unit 激活时，符号链接会放入/etc/systemd/system 目录下面以 Target 名 + .required 后缀构成的子目录中
- Alias：当前 Unit 可用于启动的别名
- Also：当前 Unit 激活（enable）时，会被同时激活的其他 Unit

`[Service]`区块用来 Service 的配置，只有 Service 类型的 Unit 才有这个区块。

- Type：定义启动时的进程行为。它有以下几种值。
- Type=simple：默认值，执行 ExecStart 指定的命令，启动主进程
- Type=forking：以 fork 方式从父进程创建子进程，创建后父进程会立即退出
- Type=oneshot：一次性进程，Systemd 会等当前服务退出，再继续往下执行
- Type=dbus：当前服务通过 D-Bus 启动
- Type=notify：当前服务启动完毕，会通知 Systemd，再继续往下执行
- Type=idle：若有其他任务执行完毕，当前服务才会运行
- ExecStart：启动当前服务的命令
- ExecStartPre：启动当前服务之前执行的命令
- ExecStartPost：启动当前服务之后执行的命令
- ExecReload：重启当前服务时执行的命令
- ExecStop：停止当前服务时执行的命令
- ExecStopPost：停止当其服务之后执行的命令
- RestartSec：自动重启当前服务间隔的秒数
- Restart：定义何种情况 Systemd 会自动重启当前服务，可能的值包括 always（总是重启）、on-success、on-failure、on-abnormal、on-abort、on-watchdog
- TimeoutSec：定义 Systemd 停止当前服务之前等待的秒数
- Environment：指定环境变量

## target

target 就是一个 unit 组。启动某个 target 的时候，systemd 就会启动里面所有的 unit。

类似于`init`进程中*运行级别*的概念。不同的是，运行级别是互斥的，target 可以同时启动。

init 与 run level 其可以如下这样对应：

| Traditional run level | New target name  | Symbolically linked to... |
| --------------------- | ---------------- | ------------------------- |
| Runlevel 0            | runlevel0.target | poweroff.target           |
| Runlevel 1            | runlevel1.target | rescue.target             |
| Runlevel 2            | runlevel2.target | multi-user.target         |
| Runlevel 3            | runlevel3.target | multi-user.target         |
| Runlevel 4            | runlevel4.target | multi-user.target         |
| Runlevel 5            | runlevel5.target | graphical.target          |
| Runlevel 6            | runlevel6.target | reboot.target             |

init 与 run level 主要区别如下：

| 项目            | run level                                                       | target                                                                                                                                         |
| --------------- | --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| 默认的 RunLevel | 在`/etc/inittab`文件设置                                        | 默认的 Target，位置是`/etc/systemd/system/default.target`，通常符号链接到`graphical.target`（图形界面）或者`multi-user.target`（多用户命令行） |
| 启动脚本的位置  | `/etc/init.d`目录，符号链接到不同的 RunLevel 目录(如`/etc/rc3`) | 放在`/lib/systemd/system`和`/etc/systemd/system`目录                                                                                           |
| 配置文件的位置  | 进程配置文件`/etc/inittab`，服务配置文件存放在`/etc/sysconfig`  | 放在`/lib/systemd`目录，在`/etc/systemd`目录里面的修改可以覆盖原始设置                                                                         |

### target 命令

```bash
# 查看当前系统的所有 Target
systemctl list-unit-files --type=target

# 查看一个 Target 包含的所有 Unit
systemctl list-dependencies multi-user.target

# 查看启动时的默认 Target
systemctl get-default

# 设置启动时的默认 Target
sudo systemctl set-default multi-user.target

# 切换 Target 时，默认不关闭前一个 Target 启动的进程，
# systemctl isolate 命令改变这种行为，
# 关闭前一个 Target 里面所有不属于后一个 Target 的进程
sudo systemctl isolate multi-user.target
```

## unit 日志管理

systemd 统一管理所有 unit 的启动日志。

```bash
# 查看所有日志（默认情况下 ，只保存本次启动的日志）
journalctl

# 查看内核日志（不显示应用日志）
journalctl -k

# 查看系统本次启动的日志
journalctl -b
journalctl -b -0

# 查看上一次启动的日志（需更改设置）
journalctl -b -1

# 查看指定时间的日志
journalctl --since="2012-10-30 18:17:16"
journalctl --since "20 min ago"
journalctl --since yesterday
journalctl --since "2015-01-10" --until "2015-01-11 03:00"
journalctl --since 09:00 --until "1 hour ago"

# 显示尾部的最新10行日志
journalctl -n

# 显示尾部指定行数的日志
journalctl -n 20

# 实时滚动显示最新日志
journalctl -f

# 查看指定服务的日志
journalctl /usr/lib/systemd/systemd

# 查看指定进程的日志
journalctl _PID=1

# 查看某个路径的脚本的日志
journalctl /usr/bin/bash

# 查看指定用户的日志
journalctl _UID=33 --since today

# 查看某个 Unit 的日志
journalctl -u nginx.service
journalctl -u nginx.service --since today

# 实时滚动显示某个 Unit 的最新日志
journalctl -u nginx.service -f

# 合并显示多个 Unit 的日志
$ journalctl -u nginx.service -u php-fpm.service --since today

# 查看指定优先级（及其以上级别）的日志，共有8级
# 0: emerg
# 1: alert
# 2: crit
# 3: err
# 4: warning
# 5: notice
# 6: info
# 7: debug
journalctl -p err -b

# 日志默认分页输出，--no-pager 改为正常的标准输出
journalctl --no-pager

# 以 JSON 格式（单行）输出
journalctl -b -u nginx.service -o json

# 以 JSON 格式（多行）输出，可读性更好
journalctl -b -u nginx.serviceqq
 -o json-pretty

# 显示日志占据的硬盘空间
journalctl --disk-usage

# 指定日志文件占据的最大空间
journalctl --vacuum-size=1G

# 指定日志文件保存多久
journalctl --vacuum-time=1years
```
