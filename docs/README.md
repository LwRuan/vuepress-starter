# 编写文档

## Markdown

### 数学公式

单行公式：

```latex
f(a) = \frac{1}{2\pi i} \oint\frac{f(z)}{z-a}dz
```
$$f(a) = \frac{1}{2\pi i} \oint\frac{f(z)}{z-a}dz$$
多行公式：
```latex
\begin{equation}
\begin{split}
\frac{\partial^2 f}{\partial{x^2}} &= \frac{\partial(\Delta_x f(i,j))}{\partial x} = \frac{\partial(f(i+1,j)-f(i,j))}{\partial x} \\
&= \frac{\partial f(i+1,j)}{\partial x} - \frac{\partial f(i,j)}{\partial x} \\
&= f(i+2,j) -2f(f+1,j) + f(i,j)
\end{split}
\end{equation}
```
$$
\begin{equation}
\begin{split}
\frac{\partial^2 f}{\partial{x^2}} &= \frac{\partial(\Delta_x f(i,j))}{\partial x} = \frac{\partial(f(i+1,j)-f(i,j))}{\partial x} \\
&= \frac{\partial f(i+1,j)}{\partial x} - \frac{\partial f(i,j)}{\partial x} \\
&= f(i+2,j) -2f(f+1,j) + f(i,j)
\end{split}
\end{equation}
$$
矩阵公式：
```latex
\begin{pmatrix}
    s\\
    t
\end{pmatrix}=
\begin{pmatrix}
    \cos(\theta) & -\sin(\theta) \\
    \sin(\theta) & \cos(\theta)
\end{pmatrix}
\begin{pmatrix}
    x\\
    y
\end{pmatrix}
```
$$
\begin{pmatrix}
    s\\
    t
\end{pmatrix}=
\begin{pmatrix}
    \cos(\theta) & -\sin(\theta) \\
    \sin(\theta) & \cos(\theta)
\end{pmatrix}
\begin{pmatrix}
    x\\
    y
\end{pmatrix}
$$

## 动画

由于整个网站是基于Vue构建的，所以我们可以通过写[Vue Component](https://v3.cn.vuejs.org/guide/component-basics.html)（Vue组件）的方式引入[three.js](https://threejs.org/)来插入3D动画。所有的组件在`.vuepress/components`目录下。

Three.js：

<div align="center">
    <div style="width:60%;aspect-ratio:16/9;">
        <threedemo />
    </div>
</div>

Trois.js：

<div align="center">
    <div style="width:60%;aspect-ratio:16/9;">
        <troisdemo />
    </div>
</div>