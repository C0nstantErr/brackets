module.exports = function check(str, bracketsConfig) {
  let inputArr = str.split('');

  for (let i = 0; i < inputArr.length; i++) {
    let currentConfig = bracketsConfig.find(arr => arr.includes(inputArr[i])); 
    if(!currentConfig) return false; 

    let nextBracket = currentConfig[currentConfig.length-1];
    if (inputArr[i + 1] === nextBracket) {
      inputArr.splice(i, 2);
      i = -1;
    }
  }
  return !inputArr.length;
}
