// 如果数组第一个字符串元素包含了第二个字符串元素的所有字符，函数返回true。
//
// 举例，["hello", "Hello"]应该返回true，因为在忽略大小写的情况下，第二个字符串的所有字符都可以在第一个字符串找到。
//
// ["hello", "hey"]应该返回false，因为字符串"hello"并不包含字符"y"。
//
// ["Alien", "line"]应该返回true，因为"line"中所有字符都可以在"Alien"找到。

function mutation(arr) {
  return arr[1].toLowerCase()
  .split('')
  .every(function(char) {
    return arr[0].toLowerCase()
    .indexOf(char) != -1;
  });
}

function mutation(arr) {
  var test = arr[1].toLowerCase();
  var target = arr[0].toLowerCase();
  for (i=0;i<test.length;i++) {
    if (target.indexOf(test[i]) < 0)
      return false;
  }
  return true;
 }

mutation(["hello", "hey"]);
