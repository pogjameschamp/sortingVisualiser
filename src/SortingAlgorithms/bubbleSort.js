// export function bubbleSort(array) {
//     const animations = [];
//     //implement bubbleSort
//     return animations;
// }

export function bubbleSort(arr) {   
    const animations = [];
    var i, j, temp;
    const n = arr.length;
    for (i = 0; i < n - 1; i++) {
        for (j = 0; j < n - i - 1; j++) {
            // put double push here
            // animations.push([i, j]);
            // animations.push([j, j+1]);
            animations.push([j, j+1]);
            animations.push([j, j+1]);
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                animations.push([j, j+1]);
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return animations;
}
