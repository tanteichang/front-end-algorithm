// 确保字符串的每个单词首字母都大写，其余部分小写。
// 像'the'和'of'这样的连接符同理。

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
  }).join(' ');
}
