# git 小技巧

### 生成 ssh key

ssh-keygen -t [rsa|dsa]

windows ssh key 存放目录：C://Users/用户名/.ssh/

### .gitignore 无效

.gitignore 只能忽略那些原来没有被 track 的文件，如果某些文件已经被纳入了版本管理中，则修改.gitignore 是无效的。

解决方法：git rm -r --cached

### Fork 出的仓库从原仓库更新

1. 添加原始远程仓库。`git remote add originUpstream https://github.com/AFNetworking/AFNetworking.git`
2. 更新原始远程仓库。`git remote update originUpstream`
3. 从原始远程仓库拉取。`git pull originUpstream master`
4. Push 到自己的仓库。`git push origin master`
