function duplicateEncode(word){
    word=word.toUpperCase();
  const map=new Map();
  for(let ch of word){
    if(map.has(ch))
      map.set(ch,map.get(ch)+1)
   else map.set(ch,1);
  }
  let str='';
  for(let ch of word){
    if(map.get(ch)>1)
      str+=')';
    else
      str+='(';
  }
  return str;
}