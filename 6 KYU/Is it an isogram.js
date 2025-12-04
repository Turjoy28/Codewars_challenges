function isIsogram(str) {
  if(typeof str!=='string') return false;
  str = str.toLowerCase().replace(/[^a-z]/g, "");
  if(str.length===0)return false;  

  const map = new Map();

  for (let ch of str) {
    if (map.has(ch)) {
      map.set(ch, map.get(ch) + 1);
    } else {
      map.set(ch, 1);
    }
  }

  const mapToArray = [...map.values()];

  for (let i = 0; i < mapToArray.length; i++) {
    if (mapToArray[0] !== mapToArray[i]) {
      return false;
    }
  }

  return true;
}