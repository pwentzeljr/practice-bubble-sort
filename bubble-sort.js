
function bubbleSort(arr) {
  let swaps = 0;
    // Iterate through the array
  for (let i = 0; i < arr.length - 1; i++) {
      // If the current value is greater than its neighbor to the right
        // Swap those values
    if (arr[i] > arr[i + 1]) {
      [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
      swaps++;
      // Do not move this console.log
      console.log(arr.join(","));
    }


  }
  // If you get to the end of the array and no swaps have occurred, return
  if (swaps > 0) bubbleSort(arr);

    // Otherwise, repeat from the beginning

}

module.exports = bubbleSort;
