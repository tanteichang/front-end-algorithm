// 猴子吃香蕉可是掰成好几段来吃哦！
//
// 把一个数组arr按照指定的数组大小size分割成若干个数组块。
//
// 例如:chunk([1,2,3,4],2)=[[1,2],[3,4]];
//
// chunk([1,2,3,4,5],2)=[[1,2],[3,4],[5]];

function chunk(arr, size) {
  var resultArr = [];
  var tempArr = [];
  var len = arr.length;
  if (len <= size | size <= 0) {
    return arr;
  } else {
    for (var i = 0; i < len; i += size) {
      tempArr = arr.slice(i, i + size);
      resultArr.push(tempArr);
    }
  }
  return resultArr;
}
