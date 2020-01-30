
export const required = (value) => {
  
    if(value!==undefined && (value + " ").trim() !=='') return undefined;
    return "Empty field";
 }
 
 export const maxlength = (value) => {
 
     if( value && value.length > 50 ) return"Max length is 50" ;
     return undefined;
  }
 
  export const maxlength16 = (value) => {
 
    if(value && value.length >= 16 ) return "Max length is 16" ;
    return undefined ;
 }
 
 export const email = (value) =>
   value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
     ? 'Invalid email address'
     : undefined