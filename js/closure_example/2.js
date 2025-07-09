function debounce(fn, delay) {
    //
    return function (args) {
        //定时器返回id
        //fn 是自由变量
        //fn 对象
        // if(fn.id){
        //     clearTimeout(fn.id);
        // }
        clearTimeout(fn.id);
        fn.id = setTimeout(function () {
            fn(args);
        }, delay);
    }
}
let obj={
    count:0,
    inc:debounce(function(val){
        //this
        console.log(this,'////');
        this.count+=val;
    },500)
}
obj.inc(2)