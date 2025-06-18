const f = [];
const climbStairs = function (n) {
    if (n == 1) return 1; //退出条件
    if (n == 2) return 2; //退出条件
    if (f[n] === undefined) //如果没有就计算
        f[n] = climbStairs(n - 1) + climbStairs(n - 2); //重复计算
    return f[n]; //返回结果

}