// 外层遍历: 从2开始循环遍历到100
for (let i = 2; i <= 100; i++) {
  // 初始化状态,代表当前数字是质数
  let isPrime = true;
  // 内层遍历: 循环遍历从 2 到 i的平方根
  for (let j = 2; j <= Math.sqrt(i); j++) {
    // 判断i是否可以被j整除
    if (!(i % j)) {
      // 修改状态
      isPrime = false;
      // 结束循环
      break;
    }
  }
  // 输出打印
  if (isPrime) console.log(i);
}
