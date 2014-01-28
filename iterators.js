// create a namespace for our iterator functions
var Iterators = (function() {
  return {
    _each: function (arr, action) {
      // implment the _each iterator
      // such that action is applied
      // to each element on the array
      // to which this function was applied
      for (var i = 0; i < arr.length; i++) {
        action(arr[i]);
      }
    },
    _map: function(arr, action) {
      // implement _map iterator
      // such that action is applied
      // to each element on the array
      // returning a new array containing
      // the results of the applications
      var _arr = [];
      for (var i = 0; i < arr.length; i++) {
        _arr[i] = action(arr[i]);
      }
      return _arr;
    }
  };
})();

// declare the array
var arr = [1,2,3];

// should output
// 1
// 2
// 3
console.log("results of applying Iterators._each to arr:");
Iterators._each(arr, function (number) {
  console.log(number);
});

// should output
// [2, 4, 6]
console.log("results of applying Iterators._map to arr:");
console.log(
  Iterators._map(arr, function (number) {
    return number * 2;
  })
);

// should output
// false to indicate that the array returned
// by _map is a different object than the array
// that had been passed in
console.log("arr and the array returned by map are identical:");
console.log(
  arr === Iterators._map(arr, function (number) {
    return number * 2;
  })
);

// should output arr's contents to indicate that _map did not 
// modify the original array's contents
console.log("arr's contents:");
console.log(arr);
