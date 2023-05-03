# redis 操作

## 键

### DEL key

删除键。

## 字符串（String）

### SET key value

设置指定 key 的值

### GET key value

获取指定 key 的值。

## 哈希（Hash）

### HMSET key field1 value1 [field2 value...]

同时将多个 field-value (域-值)对设置到哈希表 key 中。

### HGETALL key

获取在哈希表中指定 key 的所有 field 和 value

### HDEL key field1 [field2...]

删除一个或多个哈希表字段

## 列表（List）

### LPUSH key value1 [value2...]

将一个或多个值插入到列表头部

### RPUSH key value1 [value2...]

将一个或多个值插入到列表尾部

### LRANGE key start stop

获取列表指定范围内的元素

## 集合（Set）

### sadd key member1 member2

向集合添加一个或多个成员
`
