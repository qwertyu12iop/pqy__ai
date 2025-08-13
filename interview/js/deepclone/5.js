const target={
    a:1
};
//如果原对象是简单数据类型，忽略
Object.assign(target,nul);
Object.assign(target,undefined);
console.log(target);

// Object.assign(undefined,{a:1})

const obj={
    name:'张三',
}
Object.assign(obj);
