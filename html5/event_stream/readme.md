# 流式输出

- 为什么这道题会成为25年大厂必考题
  - LLM 大语言模型 聊天机器人（23年AI爆款 -》24年 推理 -》25年 AI Agent） AI产品
  - 流式输出属于用户体验，前端职责


- 为何需要流式输出？
  - 边生成边输出？
     后端、LLM 以API 的形式提供服务，
     现在的大模型 普遍都是AIGenerticContext 生成式的大模型 一个token一个token的transform(google) 出来的
     更快的看到响应

- 前端的职责
   - 良好的用户体验
   - 尽快返回结果
   障眼法  生成要花时间 我愿意等
   最懂用户心理的

- 步骤
  - 前端能实现流式输出？
    setInterval  异步 事件机制 message
  - 后端又怎么实现？
    socket 长链接
    http请求是基于请求响应式的简单协议 关闭链接？
    http 2.0 server push 服务器端推送

## 全栈能力
- npm init -y  node 后端
- npm i express 老牌的node 框架


