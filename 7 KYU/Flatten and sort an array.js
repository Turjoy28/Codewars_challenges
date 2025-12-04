"use strict";

function flattenAndSort(array) {
  let arr=[...array]
  return arr.flat().sort((a,b)=>a-b);
}