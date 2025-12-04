/*
We want to be able to call 'toJadenCase()' directly on a string like so:
'most trees are blue'.toJadenCase(); // returns 'Most Trees Are Blue'
For that, we need to add a method to the String prototype:
*/
Object.defineProperty(String.prototype, 'toJadenCase', {
  value: function () {
    let result = '';
    
    for (let i = 0; i < this.length; i++) {
      // First character should always be uppercase
      if (i === 0) {
        result += this[i].toUpperCase();
      }
      // If current char is space, next char becomes uppercase
      else if (this[i - 1] === ' ') {
        result += this[i].toUpperCase();
      }
      // Otherwise keep character as it is
      else {
        result += this[i];
      }
    }

    return result;
  }
});