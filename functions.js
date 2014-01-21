 
 /**
 * PHP functions in javascript 
 **/
 
 // String Manipulation functions 
 
 
  var str,
      str1,
      str2,
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
  
  
  
  // return the length of str
  function strlen(str) {
   
       return str.length ; 
  }
   
   
   
   
  // search for str2 in str1
  function stristr(str1,str2){
   
   
   // check if str2 exist in str1 
   if( str1.indexOf(str2) !== -1) {
    
    return true ; 
    
    
   }
   
   else{
    
    return false ; 
    
   }
   
   
  }
  
  
  
  // to lower case 
  
  function strtolower(str){
    
     var str =  str.toLowerCase() ; 
     
     return str ; 
  }
  
  
  // to upper case 
  
  function strtoupper(str){
    
     var str =  str.toUpperCase() ; 
     
     return str ; 
  }
  
  function explode(pattern,str){
   
   
  }
  
  
  
