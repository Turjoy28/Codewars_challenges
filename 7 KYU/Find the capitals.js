var capitals = function (word) {
  return word.split('').map((x,index)=>x===x.toUpperCase() ? index:-1).filter(x=>x!==-1)
};