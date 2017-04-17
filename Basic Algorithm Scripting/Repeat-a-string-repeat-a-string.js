// 重复一个指定的字符串 num次，如果num是一个负数则返回一个空字符串。

function repeat(str, num) {
  var result = '';
  if (num < 0) {
    return result;
  } else {
    for (var i = 0; i < num; i++) {
      result += str;
    }
  }
  return result;
}
