## hooks-todos

- 安排一个css亮点
  - stylus
    css 超集
- 拥有vite 脚手架
    stylus预编译 安装stylus vite直接编译
    vite来自vue 社区
- react 组件设计
  - 开发任务单元
  - 设计组件
    功能 界面 状态 响应式
    - 新建todos  表单
    - 修改 列表
    - 删除
- 按功能划分 力度
  - form 
  - list 列表
     - item 组件 维护和**性能**

- 字体
  - 设置多个，设备的支持（包含）
  - 对苹果设备单独进行优化 -apple-system 前端要负责用户体验，字体也是美感的一部分
- rem
  - 相对单位
  - 移动端的重要单位  px 不要有 绝对单位
     移动端 宽高不定 rem（html font-size） vw/vh（viewport） em 相对单位
     使用相对单位，可以根据设备的宽度进行自适应
     em相对于自身的font-size  等比例

- props 组件通信
  - 传递状态
  - 传递自定义事件
  - 直接解构(单个)
    - 解构(多个) 
    const {
      todos,//任务
      onAddTodo,//添加
    }=props 单独解构

- 数据绑定
  - 变量  修改值
  - 数据状态
     - Data binding **数据**绑定 jsx就是静态的
     {}数据绑定
     - 数据和界面状态的统一
        - 界面是由数据驱动的
        - 数据和界面状态的一致性
     - 响应式的

- vue和react区别
  - vue好入门 api好用
  - react 倾向于原生JS 入门难
     - hooks？
  - <input v-model='text'/> vue双向绑定
  - <input value={text} onChange={()=>setText(text)};/> react单向绑定
