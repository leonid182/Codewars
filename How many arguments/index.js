/*
Create a function called args_count that returns the number of arguments provided:

args_count(1, 2, 3) -> 3
args_count(1, 2, 3, 10) -> 4
*/

function args_count(){
    let arr = [];
    for(let i=0;i<arguments.length; i++){
      arr.push(arguments[i])
    }
    return arr.length
  }