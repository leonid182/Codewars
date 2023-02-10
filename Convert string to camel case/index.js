/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
*/



function toCamelCase(str){
    str = str.split('');
   
     let str2 = str.map((item, i)=>{
       if(item=='_'||item =='-'){
         item = str[i+1].toUpperCase();
         str.splice(i+1, 1);
       }
       return item
     })
    
     
      
     
      
   return str2.join('')
    }