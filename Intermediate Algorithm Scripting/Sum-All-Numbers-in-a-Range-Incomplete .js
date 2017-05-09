// 我们会传递给你一个包含两个数字的数组。返回这两个数字和它们之间所有数字的和。

// 最小的数字并非总在最前面。

function sumAll(arr) {
  const max = Math.max(...arr) // ES6 扩展语句
  // const max = Math.max.apply(null, arr) //普通写法
  
  const min =  Math.min(...arr)
  
  let result = []
  for (let i = min ; i <= max; i++) {
    result.push(i)
  }
  return result.reduce((prev, curr) => {
    return prev + curr
  }, 0)

}


sumAll([1, 4]);
