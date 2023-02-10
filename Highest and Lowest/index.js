/*n this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

for example:

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"

*/


function highAndLow(numbers){
    let str = '';
    numbers =  numbers.split(' ');
    let arr = numbers.map(item => item = item*1);
     let max = Math.max(...arr);
     let min = Math.min(...arr);
     str+=max+ ' '+ min;
     
    return str
  }