## 0-介绍

`Nvidia GTX 900-1000` 和 `RTX 2000` 系列应该下载`DeepFaceLab_NVIDIA_up_to_RTX2080Ti`。

文件结构：
* `_internal`：内部文件。
* `workspace`：工作空间。
* `data_src`和`data_dst`：提取出的帧目录，源帧和目标帧。
* `aligned`：从帧中提取出的面部图像。

源面孔最好覆盖不同角度、表情、光照，并且有高质量的面孔，并且来源一致。它与面孔的数量无关。

源与目标面孔最好有相似的头部形状。

## 1-清空工作空间

删除工作空间里的东西。

## 2-源内容收集提取

可以使用视频、照片或二者组合作为源。

1. 源应该覆盖大多数面部角度。（如果目标中不存在某些角度，源也可以不包含这些角度。）
2. 源应该覆盖所有面部表情。
3. 源内容应该一致。
4. 质量尽量高。除非在找不到某些面部角度的情况下。
4. 照明要一致。不要使用部分曝光或部分阴影的面孔。如果目标不包含暗处面孔，源中也没必要包含。
5. 如果只使用照片，要确保上面的东西，20张照片是不够的。
6. 将源中的人脸保持在3000-8000左右。15k以上将产生模糊的结果。

将视频命名为`data_src.mp4`来提取帧。
* FPS。每秒提取多少帧。
* JPG/PNG。提取的帧格式。PNG质量更好。

## 3-从目标视频中提取帧

将视频命名为`data_dst.mp4`来提取帧。

## 4-源脸部提取

使用` 4) data_src faceset extract`，它不完美，可能需要手动删除。

使用` 4) data_src faceset extract MANUAL `可以手动对齐人脸。

参数：
* 选择CPU/GPU。
* 面部类型。尽量使用WF。
* 一张图片中提取几个脸。0表示尽量多提取。
* 数据集分辨率。
* jpg质量。使用100获得最佳质量。
* 是否生成debug图像。

## 5-源排序和清理

清理误报的人脸。

执行`4.2) data_src sort`进行排序。下面是排序方法：
* 模糊度。比较慢，不完美。
* 运动模糊。用于排除运动模糊的人脸。也比较慢，不完美。
* 面部看的方向。
* 面部倾斜方向。
* 人脸大小。
* 直方图相似度。用于去除截然不同的面孔。
* 直方图差异度。
* 亮度。
* 色调。
* 黑色像素数量。
* 原始文件名。
* 图像中的一张脸。按原始帧有多少张脸的顺序。
* 绝对像素差异。
* 最佳人脸。综合多因素排序，并删除重复相似的人脸。
* 快速最佳人脸。

建议从`直方图相似度`开始筛选。

可以使用`4.1) data_src view aligned result.`查看结果。
* 绿色：好面孔。
* 红色：未对齐。可以删除或手动旋转。
* 蓝色：障碍物。如果障碍物不大，可以留下。
* 黄色：模糊。除非特殊角度，否则应该删除。这些照片总量应该保持在百分之5以下。
* 紫色：其他人脸。删除。
* 粉色：切掉的脸。如果是特殊角度，可以保留。
* 橙色：过亮过暗。应该删除，否则将平均到目标。

之后按面部看的方向和倾斜方向筛选；按色调/亮度筛选；按模糊/运动模糊筛选。最后可以使用`4.2.other) data_src util recover original filename`恢复文件名。

可以使用 `visipics` 或 `dupeguru` 等软件移除相似人脸。

之后可以将面孔分类到不同的文件夹。此后aligned文件夹应该是空的。

## 高级-源数据增强

你可能希望提高面孔的质量。在稀有的不清晰的面孔上执行这一步。

将这些面孔放入一个`aligned`文件夹中。

`4.2) data_src util faceset metadata save`。将源数据元信息放在`meta.dat`文件中。它是增强的前提。

在`data_src`下面创建一个`upscaled`文件夹。然后使用下列方法之一：
* 执行` 4.2) data_src util faceset enhance`。
* 也可以使用`DFDNet`或`Topaz AI software`。

然后,需要恢复元数据。将`upscaled`命名为`aligned`，结合`meta.dat`，执行`4.2）data_src util faceset metadata restore`

其他工具：
* `4.2) data_src util add landmarks debug images`。添加地标调试图像。
* `4.2) data_src util faceset resize `。调整数据集大小。

最后可以打包数据集。使用`4.2) data_src util faceset pack`打包。使用` 4.2) data_src util faceset unpack`解包。

## 6-目标脸部提取

使用` 5) data_dst faceset extract `提取人脸。

其他工具：
* `5) data_dst faceset extract MANUAL RE-EXTRACT DELETED ALIGNED_DEBUG`。从`aligned_debug`文件夹中手动提取人脸。
* `5) data_dst faceset extract MANUAL`。手动提取
* `5) data_dst faceset extract MANUAL`。手动修复。


## 7-目标排序、清理、面部重新提取

`5.2) data_dst sort`。与源排序相同。先使用直方图排序；然后用`5.1) data_dst view aligned results`查看；然后使用`5.2) data_dst util recover original filename`恢复原始文件名。

然后需要从`aligned_debug`中提取不能提取的帧。使用` 5.1) data_dst view aligned_debug results`进行查看和提取。

这样要查看所有帧，还有一个办法。将`aligned_debug`文件夹拷贝。然后进入`aligned`文件夹，重命名文件删除`_0`后缀。然后复制`aligned`中所有文件到拷贝的`aligned_debug`中，然后将拷贝进来的文件删除。这样剩下的就是待调试的面孔了。然后运行`5) data_dst faceset extract MANUAL RE-EXTRACT DELETED ALIGNED_DEBUG`手动提取它们。

手动提取的使用：此处暂略。

最后可以使用`5.2) data_dst util faceset pack`和`5.2) data_dst util faceset unpack`对面孔集进行打包解包。

## 8-XSGE模型训练，数据集学习和标记

现在包含一个预训练的  Generic WF XSeg 模型，可以直接使用：
* `5.XSeg Generic) data_dst whole_face mask - apply`将WF遮罩于目标数据。
* `5.XSeg Generic) data_src whole_face mask - apply`将WF遮罩于源数据。

## 9-训练

三种训练模型：
* SAEHD。(6GB+)。高质量，适用于大多数用户。
* AMP。(6GB+)。新的模型类型。
* Quick96。(2-4GB)。简单模式

选项：
* `Autobackup every N hour ( 0..24 ?:help )`自动备份。
* `[n] Write preview history ( y/n ?:help ) `写入预览历史记录。每隔几分钟保存预览图像。
* `Target iteration`迭代一定次数后停止训练。
* `[n] Flip SRC faces randomly ( y/n ?:help ) `自动水平翻转源数据面部。

### 9-1-普通训练工作流











