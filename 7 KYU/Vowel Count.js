function getCount(str) {
  const vowels="aeiou"
  return str.split('').filter(x=>vowels.includes(x)).length;
 
}