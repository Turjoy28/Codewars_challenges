var uniqueInOrder=function(iterable){
  return [...iterable].filter((ch,index,arr)=>ch!==arr[index+1])
}