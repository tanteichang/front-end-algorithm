/* 计算一个整数的阶乘 如果用字母n来代表一个整数，阶乘代表着所有小于或等于n的整数的乘积。
 */

function factorialize(num) {
  if (num <= 1) {
    return num
  } else {
    return num * factorialize(num - 1)
  }
}

function factorialize(num) {
  var cnt = 1;
  for (var i = 1; i <= num; i++) {
    cnt *= i;
  }
  return cnt;
}
