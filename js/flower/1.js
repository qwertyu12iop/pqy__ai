//申明一个对象常量
//内存中开辟一个空间，里面存放一个对象
//pp 取址 & 变量名是地址的标记
//js是弱类型语言，变量名和值是没有关系的，变量名是地址的标记
// = 赋值 Object
//对象字面量（字面意义上） JSON
//js 太灵活，不需要new，通过{}来创建对象 []拿到数组元素
const lcy = {
    name: '刘哥',//key:value String 字符串类型
    age: 21,//Number 数字类型
    tall: 178,
    hometown: '江西宜春',//Boolean 布尔类型
    isSingle: true,
    //送花
    //形参
    sendFlower: function (girl) {//function 函数类型
        console.log(`${lcy.name}给${girl.name}送了99朵玫瑰花花`);
        girl.receiveFlower(lcy);//调用

    }
};
const pp = {
    name: '皮皮',
    age: 20,
    tall: 165,
    xq: 50,
    hometown: '江西吉安',
    isSingle: true,
    //收花
    receiveFlower: function (sender) {
        console.log(`${pp.name}收到了${sender.name}送的99朵玫瑰花花`);
        if (pp.xq > 90) {
            console.log('硕果走一波');
        } else {
            console.log('不约~');
        }
    }

};
const wzry = {
    name: '王者荣耀',
    login: 'QQ',
    //送pp 寄存在wzry，都具有receiveFlower方法
    //对象互换
    //接口 interface
    receiveFlower: function (sender) {
        // if (sender.name === '刘哥') {
        //     console.log('你们还不是好友');
        //     return
        // }

        setTimeout(() => {//定时器
            pp.xq = 99;
            pp.receiveFlower(sender)
        }, 3000);
    }

}
lcy.sendFlower(wzry);//调用
//pp.receiveFlower(lcy);//调用