
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(matrix === undefined) {
    return [];
  }

  let revArr = matrix.map((item, index) => {
    if (index % 2 === 0) {
      return item;
    } 
    return item.reverse();
  });

  let Arr = [];
  revArr.map((item) => item.forEach(element => {
    Arr.push(element); 
  }));

  return Arr;
 }
 