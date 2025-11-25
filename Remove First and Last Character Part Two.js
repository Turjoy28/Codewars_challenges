function array(string) {
  let temp='';
  let str=[];
 
  for(let i=0;i<string.length;i++){
    if(string[i]===','){
       str.push(temp);
      temp='';
    }
     
    else{
        temp+=string[i];
    }
    
      
  }
  str.push(temp);
    if(str.length<3)
    return null;
  let result='';
    for(let i=1;i<str.length-1;i++){
      
      result+=str[i];
      if(i<str.length-2)result+=' ';
      
      
    }
  return result;
  
}