# deepseek
- 大模型在哪里
  远程
  http api 请求
- LLM 服务
  api 一样
  fetch 赋予了JS 新生命

## WebLLM
智能前端的战场
- 如何把deepseek引入前端

## 服务器端返回
- 输入url或者点击一个链接`(死板)`
- 向服务器端发送请求
- node/java 根据请求，去数据库取数据，生成html字符串
- 返回html字符串

## fetch请求
- 滚动到底部后，加载更多数据 web2.0 富应用体验
  看到新的内容
- fetch url
  - 不需要刷新页面， 主动去服务器端取一次，DOM更新页面
- 点赞的时候？
js fetch api like

- LLM AI 时代
fetch 取来大模型的能力 智能前端时代

## http 请求
  - 请求行 GET http://www.baidu.com
  POST 向http://api.deepseek.com/chat/completions发送请求
  - 请求头 
    设置各种头部信息
    {
      "Content-Type": "application/json"// 告诉服务器，我发送的数据是json格式的
      "Authorization": "Bearer xxx"// 请求凭证  告诉服务器，我是合法的用户
    }
  - 请求体
    GET 请求体为空，POST 请求体不为空
    
