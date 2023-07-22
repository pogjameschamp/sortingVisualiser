import SortingVisualiser from "../SortingVisualiser/SortingVisualiser";
import {resetArray} from '../SortingVisualiser/SortingVisualiser.jsx'

let ran = document.getElementsByClassName("reset")


export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
  }
  
  function mergeSortHelper(
    mainArray,
    startIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
  }
  
  function doMerge(
    mainArray,
    startIdx,
    middleIdx,
    endIdx,
    auxiliaryArray,
    animations,
  ) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, j]);
    //   console.log("adding value")
    //   console.log([i,j])
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, j]);
    //   console.log("reverting value")
    //   console.log([i,j])
      
      if (auxiliaryArray[i] <= auxiliaryArray[j]) {
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
      } else {
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
      }
    }

    while (i <= middleIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([i, i]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([i, i]);
      // We overwrite the value at index k in the original array with the
      // value at index i in the auxiliary array.
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    }

    while (j <= endIdx) {
      // These are the values that we're comparing; we push them once
      // to change their color.
      animations.push([j, j]);
      // These are the values that we're comparing; we push them a second
      // time to revert their color.
      animations.push([j, j]);
      // We overwrite the value at index k in the original array with the
      // value at index j in the auxiliary array.
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  } 

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function bubbleSorter(array) {
  // console.log("bubblesorting commence")
  // if (SortingVisualiser.resetArray()) {
  //   return;
  // }
  
  const bars = document.getElementsByClassName('array-bar');

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j+1]) {
        for (let k = 0;k < bars.length;k++) {
          if (k !== j && k !== j+1) {
            bars[k].style.backgroundColor = "blue";
          }
        }
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        bars[j].style.height = array[j] + "px";
        bars[j].style.backgroundColor = "lightgreen";
        bars[j + 1].style.height = array[j + 1] + "px";
        bars[j + 1].style.backgroundColor = "lightgreen";
        await sleep(100);
      }
      bars[j].style.backgroundColor = "blue";
      bars[j + 1].style.backgroundColor = "blue";
    }
    await sleep(100);
  }
  console.log("finished")
  return array;
}

