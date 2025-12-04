function positiveSum(arr) {
  let cnt=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i]>0)
      cnt+=arr[i];
      
  }
  return cnt;
  
}

