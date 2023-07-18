// export function bubbleSort(array) {
//     const animations = [];
//     //implement bubbleSort
//     return animations;
// }

export function bubbleSort(arr) {   
    const animations = [];
    var i, j, temp;
    var swapped;
    const n = arr.length;
    for (i = 0; i < n - 1; i++) {
        swapped = false;
        for (j = 0; j < n - i - 1; j++) {
            // put double push here
            animations.push([i, j]);
            animations.push([i, j]);
            
            if (arr[j] > arr[j + 1]) {
                // put last push here
                animations.push([j+1, j]);
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }
  
        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false)
        break;
    }
    return animations;
}
