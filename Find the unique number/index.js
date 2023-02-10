/*
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.
*/

function findUniq(arr) {
    let a = arr[0];
  let b = arr[1];
    for(let i =2; i<arr.length; i++){
      if(a!==arr[i]&&b!==arr[i]){
        return(arr[i])
      }else if(a==arr[i]&&b!==arr[i]){
        return b
      }else if(a!==arr[i]&&b==arr[i]){
        return a
      }
    }
  };