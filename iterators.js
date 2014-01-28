// create a namespace for our iterator functions
var Iterators = (function() {
  return {
    _each: function (arr, action) {
      // implment the _each iterator
      // such that action is applied
      // to each element on the array
      // to which this function was applied
    },
    _map: function(arr, action) {
      // implement _map iterator
      // such that action is applied
      // to each element on the array
      // returning a new array containing
      // the results of the applications
    }
  };
})();

// should output
// 1
// 2
// 3
Iterators._each([1,2,3], function (number) {
  console.log(number);
});

// should output
// [2,4,6]
console.log(
  Iterators._map([1,2,3], function (number) {
    return number * 2;
  })
);
