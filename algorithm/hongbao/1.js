// /**
//  * 
//  * @param {number} totoal 
//  * @param {number} num 
//  * @returns {number[]}
//  */
// function hongbao(totoal, num) {
//     const arr = [];
//     //公平性 随机性 平均值
//     let restAmount = totoal; //剩余金额
//     let restNum = num; //剩余个数
//     for(let i=0;i<num-1;i++){
//         //Math 
//         //包装类
//         let amount=Math.random(restAmount/restNum*2).toFixed(2)
//         console.log(amount);
//         arr.push(amount);
//         restAmount-=amount;
//         restNum--;
//     }
//     arr.push(restAmount.toFixed(2))
//     return arr
// }

// hongbao(100,10)

/**
 * 
 * @param {number} total 
 * @param {number} num 
 * @return {number[]}
 */
function hongbao(total, num) {
    const arr = [];
    let restAmount = total; // 剩余金额
    let restNum = num; // 剩余个数

    for (let i = 0; i < num - 1; i++) {
        // Math 
        // 包装类
        let amount = Math.random(restAmount / restNum * 2).toFixed(2)
        // console.log(amount);
        restAmount -= amount;
        restNum--;
        arr.push(amount);
    }
    arr.push(restAmount.toFixed(2));
    // - 公平性
    // 平均值
    // 随机性
    return arr
}

console.log(hongbao(31, 31));