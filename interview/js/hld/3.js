//thenable
function light(color,ms){
    console.log(color);
    return new Promise(r=>setTimeout(r,ms))
}

function loop(){
    light('red',1000)
    //控制流程  异步变同步
    .then(()=>light('yellow',3000))
    //当返回值也是一个promise  可以链式调用
    .then(()=>light('green',2000))
    //循环调用
    .then(loop)
}
loop()