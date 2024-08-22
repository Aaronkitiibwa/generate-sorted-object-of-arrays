
//declare a function named generateObject() with parameter someArray()
//create empty arrays that will store evens, odds and chars
//write a for loop to loop through the someArray
//write a formula that calculates evens, odds and chars and the use the push() method to populate the empty arrays.
//then finally combine the strings separated with commas into one single generateObject

function generateSortedObject(someArray) {
  const result = {
      evens: [],  // Array to hold sorted even numbers
      odds: [],   // Array to hold sorted odd numbers
      chars: []   // Array to hold sorted single-character strings
  };

  // Iterate over each element 
  for (let item of someArray) {
      // Check if the item is a number
      if (typeof item === 'number') {
          // If the number is even, push it to the evens array
          if (item % 2 === 0) {
              result.evens.push(item);
          } else {
              // If the number is odd, push it to the odds array
              result.odds.push(item);
          }
      } 
      // Check if the item is a single-character string
      else if (typeof item === 'string' && item.length === 1) {
          // If it's a single character, push it to the chars array
          result.chars.push(item);
      }
  }

  // Function to perform bubble sort on an array
  function bubbleSort(someArray) {
      let n = someArray.length;  // Get the length of the array
      // Outer loop for each element in the array
      for (let i = 0; i < n - 1; i++) {
          // Inner loop to compare adjacent elements
          for (let j = 0; j < n - i - 1; j++) {
              // If the current element is greater than the next element
              if (someArray[j] > someArray[j + 1]) {
                  // Swap the elements
                  let temp = someArray[j];
                  someArray[j] = someArray[j + 1];
                  someArray[j + 1] = temp;
              }
          }
      }
  }

  // Sort the evens array using bubble sort
  bubbleSort(result.evens);
  // Sort the odds array using bubble sort
  bubbleSort(result.odds);
  // Sort the chars array using bubble sort
  bubbleSort(result.chars);
  return result;
}

const someArray = [7, 'b', 2, 9.5, 4, 'a', 'c', 3, 8, 6];

console.log(generateSortedObject(someArray));
