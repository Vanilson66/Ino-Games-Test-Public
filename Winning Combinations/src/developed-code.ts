/*
*   @Please read Redme.md@;
*/


//Input
let symbolBankb: number[] = [1,1,1,1,10,6,6,6];
//Final results
let displayResult: (number | object)[] = [];


/* This function will compare the past slot with the current one in the looping, 
if true it will add it (current slot) to a temporary array and count it in the "accumulator" */
function checkPayLine(results: number[]): (number | object)[]{
  let previousSlot: number = 0;
  let tempDisplay: number[] = [];
  let accumulator: number = 0;

  results.forEach((slot, index) => {
    // Will compare the current slot with the past
    if(slot == previousSlot || slot == 0 && slot <= 9){
      tempDisplay.push(index);
      accumulator++;
    }else{
      // Will reset the accumulator and the temporary array
      tempDisplay = [index];
      accumulator = 0;
      previousSlot = slot;
    };

    // When we have an array of at least 3 equal sequential slots we will add the temporary array to the final result
    if(accumulator == 2) {
      displayResult.push([previousSlot,tempDisplay]);
    };
  });

  console.log(displayResult)
  return displayResult;
}
checkPayLine(symbolBankb);