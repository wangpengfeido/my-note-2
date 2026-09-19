# ollama 常见问题

## cli 找不到 ollama

需要手动添加 ollama 所在位置到环境变量。


## 模型未在 gpu 运行

* 升级 gpu 驱动
  * <https://www.nvidia.com/en-us/software/nvidia-app/>
* 设置 ollama 环境变量
  * OLLAMA_USE_GPU=1
* 设置 CUDA 环境变量
  * CUDA_VISIBLE_DEVICES=0