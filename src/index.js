
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = []
  for(let i in matrix) {
    if (i%2==0){
      newArr = newArr.concat(matrix[i])
    }else {
      newArr = newArr.concat(matrix[i].reverse())
    }
  }
  return newArr;
}
