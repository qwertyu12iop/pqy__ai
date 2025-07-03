// console.log('智能前端，智能后端，笑傲秋招')
const loginForm=document.getElementById('loginForm')
loginForm.addEventListener('submit',async(event)=>{
    event.preventDefault()//阻止表单的默认提交行为
    //trim()方法用于去除字符串两端的空白字符
    const username=document.getElementById('username').value.trim()
    const password=document.getElementById('password').value.trim()
    //console.log(username,password);
    try{
        const response=await fetch('/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                username,
                password
            })
        })
        const data=await response.json()
        console.log(data);
        
    }catch(err){
        console.log('登录出错了');
        
    }
})
document.addEventListener('DOMContentLoaded',async ()=>{
    //登录吗?
    try{
        const response=await fetch('/check-login')
        const data = response.json();
        console.log(data
            
        );
        
    }catch(err){

    }
})