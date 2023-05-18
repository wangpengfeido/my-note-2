# mongoDB

<https://www.mongodb.com/>

##### 配置文件

配置文件书写格式：key = value。

- **port** 端口号
- **dbpath** 数据库文件的存放位置（文件夹）
- **logpath** 日志文件的存放位置（文件）

## mongod

##### 普通选项

###### -f 配置文件地址

指定配置文件

## mongo

mongo [options] [db address] [file names(ending in .js)]

##### db address 数据库地址

- **数据库名** 当数据库为本机时使用
- **ip:数据库名**
- **ip:端口号/数据库名**

##### 权限选项

###### -u [--username] 用户名

###### -p [--password] 密码

## mongostat

## 系统命令

###### show dbs

查看系统中的数据库。

###### use 数据库名

切换数据库，如果不存在该数据库则自动创建。

###### show collections

查看当前数据库中的集合。

###### show tables

查看当前数据库中的表。 ###增删改查

###### db.shutdownServer()

关闭 mongodb 服务。

###### db.dropDatabase()

删除当前数据库。

###### db.集合名.insert(data)

向集合中插入数据。如果集合不存在则创建集合。

在插入的数据中，\_id 不能重复。

###### db.集合名.find(查询条件,附加数据)

查找集合中的数据。

**$exist 操作符**:查询条件使用该操作符查询字段存在或不存在的数据，如查询条件：{x:{$exist:true}}

**$text 操作符**:查询条件可以使用{$text:{$search:"x y"}}进行全文搜索。x y 表示满足 x 或 y；x -y 表示满足 x 但不满足 y；\"x\" \"y\"表示既满足 x 又满足 y。

**$near 操作符**:2d 地理位置查询，查询距某个点最近的点，例如查询条件：{x:{$near:[1,1]}}

**$geoWithin 操作符**:查询在某个形状内的点。

**$box 操作符**:指定矩形形状，例如:{$box:[[1,1],[2,2]]}

**$center 操作符**:指定圆形形状，例如:{$center:[[2,2],1]}

**$polygon 操作符**:指定多边形形状，例如:{$polygon:[[1,1],[2,2],[1,2]]}

**$maxDistance 操作符**:地理位置查询时指定最大距离

**$meta 操作符**:附加数据可以使用{xxx:{$meta:"textScore"}}获取相似度。查询时使用此操作符后，sort()方法也可以使用此操作符排序。

###### db.集合名.findOne()

查找集合中的第一条数据

###### db.集合名.count()

查询集合中数据条数

###### data.count()

查询数据条数

###### data.skip(n)

跳过 n 跳数据

###### data.limit(n)

最多查询 n 条数据

###### data.sort(kvs)

排序数据

###### data.hint(name)

强制使用索引

###### db.集合名.update(查询条件,data[,insertIfNotExist[,multiUpdate]])

更新数据

- **insertIfNotExist** Boolean Default:false 如果为 true，则当查询的数据不存在时自动插入数据。如果更新的 data 中未使用$set操作符，则新插入的数据为更新的data；如果更新的data中使用了$set 操作符，则新插入的数据为查询条件和更新的 data 的合体。
- **multiUpdate** Bollean Default:false 如果为 false，则只更新首条查找到的数据；如果为 true，更新所有查找到的数据，为 true 时更新的 data 中必须使用$set 操作符

**$set**:部分更新操作符，{$set:要更新的数据}

###### db.集合名.remove(查询条件)

删除数据

###### db.集合名.drop()

删除集合

### 索引

###### db.集合名.getIndexes()

查询当前集合的索引

###### db.集合名.createIndex(kvs[,attrs])

创建索引

- **kevys**: 可以用{x:1}的格式创建单键索引和多键索引；用{x:1,y:1}的格式创建复合索引。value 可以为 1 或-1 代表正向和反向；value 为"text"时创建全文索引,此时 key 使用"$\*\*"表示对集合中所有字段创建全文索引；value 为"2d"时创建 2d 地理位置索引，位置的存储方式为[经度,纬度]；value 为"2dsphere"时创建 2d 球面地理位置索引，位置的存储方式为 GeoJSON。
- **attrs.name**:指定索引的名字。
- **attrs.unique**:Boolean 指定是否是唯一索引。
- **attrs.sparse**:Boolean Default:false 指定索引的稀疏性，即是否为不存在索引字段的数据插入索引。NOTE:如果使用$exist 操作符在稀疏索引上查找，可能出现错误。
- **attrs.expireAfterSeconds**:设置索引的过期时间,索引过期后，会将数据库中的数据删除。NOTE:_1.索引字段必须为时间类型；2.索引字段如果是时间数组，则按照最小时间进行删除；3.过期索引不能是复合索引；4.删除时间不是精确的_

###### db.集合名.dropIndex(name)

删除索引
