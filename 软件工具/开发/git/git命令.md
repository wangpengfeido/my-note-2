# git 命令

### git config

#### git config [--global] user.name “用户名”

设置用户名。

带--global 参数表示为机器上所有 git 仓库使用此配置。

#### git config [--global] user.email “邮箱”

设置邮箱。

#### git config [--global] color.ui true

配置 git 的显示效果。

#### git config [--global] –l

查看配置信息。

### git init

将当前目录初始化为 git 仓库。

### git add

#### git add 文件名

将文件修改添加到暂存区。

#### git add -A

将目录下所有文件修改添加到暂存区。

#### git add –f 文件名

强制添加某个文件到仓库。

### git rm

#### git rm 文件名

将已删除的文件在暂存区中删除。

### git commit

#### git commit –m “说明”

将暂存区提交到仓库。

### git status

查看当前仓库状态（工作区与仓库的区别）。

### git deff

查看工作区与仓库最新版本的具体区别。

#### git diff HEAD -- 文件名

查看工作区与具体仓库版本具体文件的具体区别。

### git log

查看最近的提交日志。

#### git log -–pretty=oneline

简化的日志。将每个提交放在一行显示。

#### git log –graph

查看分支合并图。

### git reflog

查看最近的 git 命令，以及每次命令完成后对应的版本号。

可以利用它查看想要恢复的版本号。

### git reset

#### git reset [–-hard] HEAD^

回退到上个版本。

HEAD^可以换为 HEAD^^、HEAD~1000 等。

也可以使用 git reset HEAD，回退到上次提交（最新提交）。如果使用`--hard`，上次提交之后的内容会全部丢失，包括暂存区内的。

慎用” —hard”：它会强制回退版本，丢弃掉现在没有 commit 的内容，工作区内容直接变为回退后版本内容，并将状态变为 staged。如果不使用`--hard`回退，工作区内容不会变化，相对回退后版本的内容会变为 unstaged。

#### git reset 版本号

回退某个版本或恢复某个版本。

版本号可以不写全（只写前几位），git 将自动查找匹配版本号。

#### git reset 版本号 文件名

回退某个文件到某个版本。

### git clone

#### git clone 地址

将远程库克隆到本地。

### git remote

#### git remote –v

查看远程库详细信息。

#### git remote add 远程仓库源名 源地址

关联本地库和远程源仓库。

### git pull

#### git pull

拉取当前分支的远程代码。

#### git pull 源名 分支名

从远程某个源拉取某个分支的代码。

#### git pull --rebase 源名 分支名

拉取远程时使用 rebase 操作，而不是使用 merge 操作。

### git push

#### git push [-u] 远程库名 分支名

将本地仓库推送到远程仓库

-u 参数是推送时将本地库分支与远程库分支关联，通常第一次推送时使用

#### git push 远程库名 标签名

将指定标签推送到远程

#### git push 远程库名 –tags

向远程推送全部未推送的标签

#### git push 远程库名 :refs/tags/标签名

删除一个远程标签

### git checkout

#### git checkout 分支名

切换分支。

#### git checkout –b 分支名

创建并切换到分支。

#### git checkout -b 分支名 远程源名/分支名

创建与远程库对应的分支。

#### git checkout –b 分支名 版本号

从某个分支的某个版本号创建分支。

### git branch

#### git branch

查看分支。

#### git branch 分支名

创建分支。

#### git branch –d 分支名

删除指定分支。

#### git branch –D 分支名

强行删除未合并分支。

#### git branch –set-upstream 分支名 远程库名/分支名

建立本地分支与远程分支的关联。

### git merge

#### git merge 分支名

合并指定分支到当前分支。

#### git merge –-no-ff –m “描述” 分支名

禁用快速合并（fast forward）来合并分支。

这将创建一个 commit 来合并分支，而不是直接改变分支指向。

如果顺着*合并到的分支*能走到*被合并的分支*，换句话说，*合并到的分支*的所有提交都已经在*被合并的分支*上了。那么，在合并时默认就会创建一个快速合并，它只是将*合并到的分支*的指针移动到*被合并的分支*的最新提交。

#### git merge --squash 分支名

将*被合并分支*的变化总结为一次提交，提交到*合并到*分支上。**它并不能算是一次真正的“合并”**。

### git rebase

变基操作。它改变 commit 的基线到另一个点上。

#### git rebase 分支名

将一个分支的提交变基到当前分支中分叉的开始处。

#### git rebase [startpoint] [endpoint] [--onto 目标分支/目标 commit]

将范围内的 commit 变基到目标分支上。

(startpoint,endpoint] 是前开后闭区间。endPoint 是可选的，它默认是当前 head 所在的点。

`--onto` 可以复制 commit 到目标点上。复制后的 hash 与原来不同。复制后的 head 是游离的，需要新建分支或进行 reset 操作。

#### `git rebase -i [startpoint] [endpoint] [--onto 目标分支/目标commit]`

使用交互模式进行变基。

交互模式命令：

- pick。p。保留 commit。
- reword。r。保留 commit，并修改注释。
- edit。e。保留 commit，并修改提交。
- squash。s。将该 commit 与前一个 commit 合并。
- fixup。f。将该 commit 与前一个 commit 合并，但不需要保留注释信息。
- drop。d。丢弃该 commit。
- exec。x。执行 shell 命令。

#### git rebase --continue

在产生冲突或问题时，解决冲突或问题后继续变基操作。

#### git rebase --abort

中止变基操作。

### git cherry-pick

#### git check-ipck 某个 commit [某个 commit...]

选择一个或多个 commit 复制到当前分支。

#### git check-ipck 某个 commit..某个 commit

选择(第一个 commit,第二个 commit]复制到当前分支。注意是前开后闭区间。

### git stash

#### git stash list

查看工作现场

#### git stash apply

恢复工作现场

#### git stash drop

删除工作现场

#### git stash pop

恢复同时删除工作现场

### git tag

#### git tag 标签名

在当前分支最新 commit 创建一个标签

#### git tag 标签名 commit 号

在指定 commit 创建一个标签

#### git tag –a 标签名 –m “说明”

创建带有说明的标签

#### git tag –s 标签名 –m “说明” 私钥

用 PGP 私钥签名一个标签

#### git tag –d 标签名

删除标签

### git show

#### git show 标签名

查看指定标签的详细信息
