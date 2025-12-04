function twoSum(numbers, target) {
  
  const map = {}; 
  for(let i=0;i<numbers.length;i++){
    let needed=target-numbers[i];
    if(map[needed]!=undefined)
      return [map[needed],i];
    map[numbers[i]]=i;
  }
}