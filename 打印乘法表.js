for (let i = 1; i <= 9; i++) {
  for (let j = 1; j <= 9; j++) {
    if (j <= i) {
      document.write(`${j}*${i}=${j*i}&nbsp;`);
    }
  }
  document.write('<br>');
}
