function solution(A) {
  const keyValObj = A.reduce((keyValObj, v) => {
    keyValObj[v] = keyValObj[v] !== undefined ? keyValObj[v] + 1 : 1;
    return keyValObj;
  }, {});
  
  const result = Object.keys(keyValObj)
    .filter(i => keyValObj[i] % 2 === 1 ? keyValObj[i] : false);
  return parseInt(result[0]) || 0;
}

let ele = solution([9, 3, 9, 3, 9, 7, 9])
console.log(ele);
