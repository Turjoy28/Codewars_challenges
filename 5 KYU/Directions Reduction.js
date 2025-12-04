function dirReduc(arr){
  
  const oppositeMap={
    NORTH:"SOUTH",
    SOUTH:"NORTH",
    EAST:"WEST",
    WEST:"EAST",
  }
  return arr.reduce((stack,dir)=>(stack.length&&oppositeMap[dir])===stack[stack.length-1]
                    ?(stack.pop(),stack)
                   :(stack.push(dir),stack),[])  
   
}
