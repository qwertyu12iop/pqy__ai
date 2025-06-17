const addItems=document.getElementById(".add-item");//form
const itemsList=document.querySelector(".plates");//列表

function addItem(e){
    e.preventDefault();//阻止表单提交
}

// 获取表单元素并添加事件监听
const form = document.querySelector('form');
form.addEventListener('submit', addItem);

