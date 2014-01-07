 
 
 
  var str,
      variable; 
  
  function isset(str){
  
        if (typeof str !== undefined){
           
            return true ; 
        }
        else {
        
        return false ;
        }
  
  }
  
  function empty(variable) {
   
   if (variable === ''){
    
        return true ; 
     
   }
   else {
    
    return false ; 
   }
  }
  
  function strlen(str) {
   
       return str.length ; 
  }
   
