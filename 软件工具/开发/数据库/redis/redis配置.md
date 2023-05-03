# redis 配置

## config

### prot 端口号

端口号

### deamonize yes/no

后台运行

### requirepass 密码

密码

### maxmemory 大小

最大占用内存

### maxmemory-policy 策略

内存满时的策略

策略：

- volatile-lru 根据 LRU 算法删除设置过期时间的 key
- allkeys-lru 根据 LRU 算法删除任何 key
- volatile-random 随机移除设置过过期时间的 key
- allkeys-random 随机移除任何 key
- volatile-ttl 移除即将过期的 key(minor TTL)
- noeviction 不移除任何 key，只返回一个写错误

## 命令

### redis-server [redis.conf]

启动 redis 服务

### redis-cli [-h host] [-p port] [-a password]

打开 redis cli，连接 redis 服务

#### ping

检测 redis 服务是否连接

#### info

查看 redis 的内存使用情况

#### shutdown

停止 redis 服务
