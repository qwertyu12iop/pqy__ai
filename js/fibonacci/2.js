//如何用闭包优化fib
//记忆功能 
function memoizedFib(){
    //闭包  函数嵌套函数
    const cache={};//存储
    return function fib(n){
        if(n<=1)return n;
        if(cache[n])return cache[n];//如果有就直接返回
        cache[n]=fib(n-1)+fib(n-2);
        return cache[n];
    }
    }
    //可以在外部访问
    const fib=memoizedFib();
