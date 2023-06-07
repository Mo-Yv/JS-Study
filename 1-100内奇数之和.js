//储存结果
var sum = 0;
//遍历
for(var i = 0;i < 100;i++){
  //判断是否可以被2整除
  if(i % 2 != 0){
    //累加
    sum += i;
  }
}
//输出
console.log(sum);
