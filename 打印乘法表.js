for (let i = 1; i < 10; i++) {
  for (let j = 1; j <= i; j++) {
    if (j <= i) {
      document.write(j, "*", i, "=", i * j, "&nbsp;");
    }
  }
  document.write("<br/>");
}
