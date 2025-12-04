function descendingOrder(n){
  
  let str=''+n;
  return Number(str.split('').sort((a,b)=>b-a).join(''));
 
    
  
}