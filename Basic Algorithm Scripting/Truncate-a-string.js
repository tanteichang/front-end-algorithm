// 截断一个字符串！
//
// 如果字符串的长度比指定的参数num长，则把多余的部分用...来表示。
//
// 切记，插入到字符串尾部的三个点号也会计入字符串的长度。
//
// 但是，如果指定的参数num小于或等于3，则添加的三个点号不会计入字符串的长度。

function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  } else {
    return str.slice(0, num > 3 ? num - 3 : num) + '...';
  }
}
