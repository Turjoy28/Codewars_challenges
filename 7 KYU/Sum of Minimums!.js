function sumOfMinimums(arr) {
  
  let total=0;
  for(let i=0;i<arr.length;i++){
    let temp=arr[i][0];
    for(let j=1;j<arr[i].length;j++){
      if(temp>arr[i][j])
        temp=arr[i][j]
      
    }
    total+=temp;
  }
  
  return total;
  
}