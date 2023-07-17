// // export const mergeSort = array => {
// //     if(array.length === 1 ) {
// //         return array;
// //     }
// //     const middleId = Math.floor(array.length / 2);
// //     const firstHalf = mergeSort(array.slice(0, middleId));
// //     const secondHalf = mergeSort(array.slice(middleId));
// //     const sortedArray = [];
// //     let i = 0, j=0;

// //     while (i < firstHalf.length && j < secondHalf.length) {
// //         if (firstHalf[i] < secondHalf[j]) {
// //             sortedArray.push(firstHalf[i++]);
// //         } else {
// //             sortedArray.push(secondHalf[j++]);
// //         }
// //     }

// //     while (i < firstHalf.length) {
// //         sortedArray.push(firstHalf[i++]);
// //     }
// //     while (j < secondHalf.length) {
// //         sortedArray.push(secondHalf[j++]);
// //     }
// //     return sortedArray;
// // };

// export function getMergeSortAnimations(array) {
//     const animations = [];
//     if (array.length <= 1) {
//         return array;
//     }
//     const auxArray = array.slice();
//     mergeSortHelper(array, 0, array.length - 1, auxArray, animations);
//     return animations;
// }

// function mergeSortHelper(mainArray, startId, endId, auxArray, animations) {
//     if (startId === endId) {
//         return;
//     }
//     const middleId = Math.floor((startId + endId) / 2);
//     mergeSortHelper(auxArray, startId, middleId, mainArray, animations);
//     mergeSortHelper(auxArray, middleId + 1, endId, mainArray, animations);
//     doMerge(mainArray, startId, middleId, endId, auxArray, animations);
// }

// function doMerge(mainArray, startId, middleId, endId, auxArray, animations) {
//     let k = startId;
//     let i = startId;
//     let j = middleId + 1;
//     while (i <= middleId && j <= endId) {
//         const animation = {};
//         animation.comparison = [i,j];
//         if (auxArray[i] <= auxArray[j]) {
//             animation.swap = [k, i];
//             mainArray[k++] = auxArray[i++];
//         } else {
//             animation.swap = [k, j];
//             mainArray[k++] = auxArray[j++];
//         }
//         animations.push(animation);
//     }

//     while (i <= middleId) {
//         animations.push({comparison:[i,i], swap: [k,i]});
//         mainArray[k++] = auxArray[j++];
//     }

//     while (j <= endId) {
//         animations.push({comparison: [j,j], swap: [k,j]});
//         mainArray[k++] = auxArray[j++];
//     }
// }

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