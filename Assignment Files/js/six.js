var i, j;
for (i = 1; i <= 12; i++) {
  printer.innerHTML("<Table>"+ " " +i+ "<br>");
  for (j = 1; j <= 12; j++)
  printer.innerHTML(i+ "*" +j+ "=" +i*j +"<br>");
}
