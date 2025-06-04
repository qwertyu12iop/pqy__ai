# js(原生)->vue+react

## 语义化标签
    - 图标，表格  给老板看
    table
        thead
          tr
            th
        tbody
          tr
            td
## DOM 编程
   操作DOM节点，将界面动态更新

## 样式
    - 不用去写细节和重复代码，focus业务
    - 引入第三方库 bootstrap PC css框架，业务类
    - .container 容器 固定宽度
    - table 

## 如何将js代码交给框架去做，focus于**业务**
- jquery退出了历史舞台
- vue
     聚焦于业务
     friends 数据
     tbody 挂载点上
     远离API
- react

## 现代前端框架
- 离开原生js的刀耕火种
- 聚焦于业务
   - App的概念
   切图崽 html+css+简单的js(DOM+event)
  App 应用开发工程师
  vue.createApp().mount('#app')  实例化一个应用程序对象，将应用程序对象挂载到页面上  
  #app 是 这里面支持Vue app 接管
  不用低级的DOM API
  - 循环输出数据
        - vue App中提供了data(){
            friends
        }
        - tr v-for 配合循环输出的业务

## react 来自于Facebook  适合大型应用
- 创建react 应用
    npm init vite 初始化一个项目
    