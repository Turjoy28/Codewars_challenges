function isIsogram(str){
  str=str.toLowerCase();
  let map= new Map();
  for(ch of str){
    if(map.has(ch))
    map.set(ch,map.get(ch)+1);
    else
      map.set(ch,1)
  }
  const mapToArray=[...map.values()]
  if(mapToArray.some(e=>e>1))
    return false;
  else
    return true;
}