for (let i = 2; i <= 100; i++) {
  var isPrime = true;
  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }
  if (isPrime) console.log(i);
}
