function findOutlier(integers){
    if( (integers[0]%2==0&&integers[1]%2==0) ||(integers[0]%2==0&&integers[2]%2==0) || (integers[2]%2==0&&integers[1]%2==0)  ){
      for(let i=0; i<integers.length; i++){
        if(integers[i]%2==1||integers[i]%2== -1){
          return integers[i]
        }
      }
   }
     else {
       
         for(let i=0; i<integers.length; i++){
          if(integers[i]%2===0){
            return integers[i]
          }
       }
     }
   }