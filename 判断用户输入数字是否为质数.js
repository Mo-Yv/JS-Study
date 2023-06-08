// 接收用户输入数据
var num = prompt("输入数字");
// 数据合法性校验
if (num <= 1 || num % 1 != 0) {
  document.write("数据无效!");
} else {
  // 记录状态
  var isPrime = true;
  // 遍历从2到num-1的数字
  for (let i = 2; i < num; i++) {
    // 取模,如果值为0,说明num可以被i整除,num不是质数
    if (num % i == 0) {
      // 修改状态
      flag = false;
      // 已经确定结果,后面的数字没必要继续遍历了,结束循环
      break;
    }
  }
  // 判断状态,打印结果
  isPrime ? document.write(num + "是质数") : document.write(num + "不是质数");
}
