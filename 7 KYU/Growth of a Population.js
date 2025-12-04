function nbYear(p0, percent, aug, p) {
    let cnt=0;
      while(p0<p){
        p0=Math.floor(p0+p0*(percent/100)+aug);
        cnt++
      }
    return cnt;
  
  }