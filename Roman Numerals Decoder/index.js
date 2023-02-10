/*
Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. You don't need to validate the form of the Roman numeral.

Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, starting with the leftmost digit and skipping any 0s. So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.

Example:

solution('XXI'); // should return 21
Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000

*/




function solution (roman) {
    let result = 0;
    let arr = roman.split('');
    
    for(let i = 0; i<arr.length; i++){
      
      if(arr[i]=='X'){
        arr[i] = 10;
      }else if (arr[i]=='I'){
        arr[i] = 1;
      }else if (arr[i]=='V'){
        arr[i] = 5;
      }else if (arr[i]=='L'){
        arr[i] = 50;
      }else if (arr[i]=='C'){
        arr[i] = 100;
      }else if (arr[i]=='D'){
        arr[i] = 500;
      }else if (arr[i]=='M'){
        arr[i] = 1000;
      }
      
    }
      
      for(let j = 0; j<arr.length; j++){
        if(arr[j]<arr[j+1]){
          result += arr[j+1]-arr[j];
          j++;
        }else{
          result+=arr[j]
        }
        
        }
      return result
    }