//储存结果
let sum = 0;

//遍历1-100的整数
for(let i = 0;i < 100;i++){
  //判断是否可以被2整除
  if(!(i % 2)) sum += i;
}

//输出
console.log(sum);
