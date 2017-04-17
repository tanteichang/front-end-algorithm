// 找到提供的句子中最长的单词，并计算它的长度。
// 函数的返回值应该是一个数字。

function findLongestWord(str) {
  var strArr = str.split(' ');
  var maxLen = strArr[0].length;
  for (var i = 1; i < strArr.length; i++) {
    if ( maxLen < strArr[i].length ) {
      maxLen = strArr[i].length;
    }
  }
  return maxLen;
}
