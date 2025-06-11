# 智能前端之语音
- AI时代新的交互体验，语音交互的未来
  虚拟数字人  AIGC 文字 -> 语音

- 敏感信息怎么保护？
  .gitignore  声明哪些文件不需要上传到git仓库
  node_modules/ 目录下的所有文件不需要上传到git仓库  太大了  没有必要提交 npm i 

- 环境变量
  .env.local  本地环境变量  .开头的文件是隐藏文件  不会被git跟踪
  添加到.gitignore 里面

- 单向数据流
  input value绑定了{prompt}
  保持数据状态和界面的统一
  UI= f(state)  state 驱动界面
  onChange 修改

- base64 格式
  