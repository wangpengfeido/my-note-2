# LaTex 公式

## 符号

| 意义         | 表示法                          | 示例                        |
| ------------ | ------------------------------- | --------------------------- | ------------------ |
| 自定义运算符 | `\operatorname{custom}`         | $\operatorname{custom}$     |
| 定义数学符号 | `\mathrm{A}`                    | $\mathrm{A}$                |
| 分数         | `\frac{x}{y}`                   | $\frac{x}{y}$               |
| 右侧下标     | 单字符：`x_a`，多字符：`x_{ab}` | $x_a$，$x_{ab}$             |
| 右侧上标     | 单字符：`x^a`，多字符：`x^{ab}` | $x^a$，$x^{ab}$             |
| 上划线       | `\overline{ab}`                 | $\overline{ab} $            |
| 左右括号     | `\left\{ \right\}`，支持`{}()[] | `                           | $\left\{ \right\}$ |
| 绝对值       | `\vert`，`$\lvert`，`\rvert`    | $\vert$，$\lvert$，$\rvert$ |
| 取模         | `a \bmod b`                     | $a \bmod b$                 |

### 空格

| 意义       | 表示法     | 示例           |
| ---------- | ---------- | -------------- |
| 1em 空格   | `\quad`    | $a \quad a$    |
| 2em 空格   | `\qquad`   | $a \qquad a$   |
| 0.5em 空格 | `\enspace` | $a \enspace a$ |

### 数学

| 意义     | 表示法      | 示例        |
| -------- | ----------- | ----------- |
| 小于等于 | `\leq`      | $\leq$      |
| 小于等于 | `\leqslant` | $\leqslant$ |
| 大于等于 | `\geq`      | $\geq$      |
| 大于等于 | `\geqslant` | $\geqslant$ |

### 逻辑

| 意义 | 表示法   | 示例     |
| ---- | -------- | -------- |
| 与   | `\land`  | $\land$  |
| 或   | `\lor`   | $\lor$   |
| 非   | `\neg`   | $\neg$   |
| 异或 | `\oplus` | $\oplus$ |

## 环境

以`\begin{环境名}[可选参数]{必选参数}`开始，以`\end{环境名}`结束。

### 矩阵

使用`&`进行元素分隔，使用`\\`进行行分隔，使用`&&`分隔行备注。

```
\begin{array}{}
1 & 21 & 3 \\
1 & 421 & 313 \\
121 & 42 & 3 \\
\end{array}
```

$
\begin{array}{}
1 & 21 & 3 \\
1 & 421 & 313 \\
121 & 42 & 3 \\
\end{array}
$

对齐。`l`左对齐，`c`居中，`r`右对齐。

```
\begin{array}{lcr}
1 & 21 & 3 \\
1 & 421 & 313 \\
121 & 42 & 3 \\
\end{array}

```

$
\begin{array}{lcr}
1 & 21 & 3 \\
1 & 421 & 313 \\
121 & 42 & 3 \\
\end{array}
$

### 对齐

$
\begin{aligned}
x & = \cos(t) \\
y & = \sin(t) \\
z & = \frac xy \\
\end{aligned}
$
