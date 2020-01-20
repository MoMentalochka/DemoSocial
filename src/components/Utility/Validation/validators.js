

export const required = (value) => {
  
   if(value!==undefined && (value + " ").trim() !=='') return undefined;
   return "Empty field"
}

export const maxlength = (value) => {

    if(value && value.length <= 100 ) return undefined;
    return "Max length is 100"
 }

 export const maxlength16 = (value) => {

   if(value && value.length <= 16 ) return undefined;
   return "Max length is 16"
}