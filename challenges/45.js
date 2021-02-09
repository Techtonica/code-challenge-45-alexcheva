// Given an array of ints length 3, figure out which is larger, the first or last element in the array, and set all the other elements to be that value. Return the changed array.
// Bonus Challenge:  Try to do this _without_ initializing a new array.


function max_end3(int_array){
  if(int_array[0]>int_array[2]){
    for(let i in int_array) {
      int_array[i] = int_array[0];
    }
  }else{
    for(let i in int_array) {
      int_array[i] = int_array[2];
    }
  }
  console.log(int_array);
  return int_array;
}

max_end3([1, 2, 3]) 
//// [3, 3, 3]

max_end3([11, 5, 9]) 
//// [11, 11, 11]

max_end3([2, 11, 3]) 
//// [3, 3, 3]


module.exports = max_end3;
