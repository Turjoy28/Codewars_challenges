function accum(s) {
	// your code
   let res='';
  let resPushingArray=[];
  let str= s.split('');
  for(let i=0;i<s.length;i++){
    res=str[i].toUpperCase()+str[i].toLowerCase().repeat(i);
   resPushingArray.push(res);
  }
  return resPushingArray.join('-');
}