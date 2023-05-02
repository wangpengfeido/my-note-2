# tar

文件归档工具。

<https://linux.die.net/man/1/tar>

```
tar [OPTION...] [FILE]...
```

- `-f, --file=ARCHIVE` 档案文件名字，只能作为最后一个参数。
- `-x` 从文件解压。
- `-z` 过滤仅使用 gzip 档案。
- `-v, --verbose` 显示处理过程。
- `-C` 指定目标目录。

## 例子

解压到指定目录。

```bash
tar -zxvf ./a.tar.gz -C ./a/b
```

将 aaa 文件打包到 a.tar.gz。

```bash
tar -zxvf /a.tar.gz ./aaa
```
