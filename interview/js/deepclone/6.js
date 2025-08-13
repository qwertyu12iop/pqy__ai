//请问 你在项目开发中具体使用过吗  参数的默认值
//合并参数
//默认值 用户会传的  Object.assign 收入囊中
//目标对象是{}空对象 合并用户传参和默认参数,合并配置对象
//Option 是会传入的对象
function createUser(option){
    const defaults={
        name:'匿名函数',
        age:18,
        isAdmin:false,
    }
const config=Object.assign({},defaults,option);
console.log(config);
}

createUser({
    name:'张三',
    age:20,
})
const baseConfig={api:'/api',timeout:500}
const envConfig={timeout:10000,debug:true};
const finalConfig=Object.assign(
    {},
    baseConfig,
    envConfig
)
console.log(finalConfig);

