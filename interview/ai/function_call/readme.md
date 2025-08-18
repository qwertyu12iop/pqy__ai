# Function Call

- LLM调用API 有什么缺点？
       - LLM 是提前训练好的，新的知识或服务器不知道的
           LLM插上隐形的翅膀，调用些外部的内容和工具
           chat之外，可以调用函数
       - AIGC 没有足够的上下文，胡说八道
            temperature
           - 给LLM足够的上下文 
              Function 调用外部的天气服务
           - MCP
              给大模型插入的USB
           - Prompt 设计
           - 工作流
               工作节点让LLM 流程化
           - 知识库
           
       - 我们可以将知识库(私有)交给大模型，LLM大模型更懂我们
       不安全 RAG

## Function Call
      让AIGC从只会生成文本进化为能可靠执行操作，解决了自然语言
      到结构化调用的鸿沟，使模型能安全、可控地调用外部系统（知识库、服务），推动实用化落地。
      “帮我订明天北京到上海的机票”

    - 简洁，强大
    - 习惯和依赖

## Function Call的流程

- 传统chat api 调用，变成两步
     - 根据prompt和tools中的description，语义关联性分析
         匹配到的function 名字和参数，type function
     - 调用function
     - 将函数的返回结果

- 核心
    - openai 接口能力的升级，LLM可以和外部系统、工具互动
         LLM 能力争抢
    - chatbot 的用户体验更好
    - api 增量式的，设计的很简约，学到了接口设计
         - function tool tools申明
              type,name,parameters
         - 返回结果 function.id
              role:'tool'
