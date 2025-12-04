function duplicateCount(text){
  text=text.toUpperCase();
  const map=new Map();
  for(let ch of text){
    if(map.has(ch))
      map.set(ch,map.get(ch)+1)
   else map.set(ch,1);
  }
  const mapToArray=[...map.values()]
  let cnt=0;
  for(let i=0;i<mapToArray.length;i++){
    if(mapToArray[i]>1){
      cnt++;
    }
  }
    
  return cnt;
  
}