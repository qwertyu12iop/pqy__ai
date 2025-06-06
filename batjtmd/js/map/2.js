//parseInt num 
['1','2','3'].map((num,index,arr)=>{
    console.log(num,index,arr);
    return num; 
})
//第二个参数是进制数
parseInt('1',0,['1','2','3'])