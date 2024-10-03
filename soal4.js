function arrSum(arr) {
    let max = -9999999;
    let currentSum = 0;
    let start = 0;
    let end = 0;
    let tempStart = 0;

    for (let i = 0; i < arr.length; i++) {
        currentSum += arr[i];
        if (currentSum > max) {
            max = currentSum;
            start = tempStart;
            end = i;
        }
        if (currentSum < 0) {
            currentSum = 0;
            tempStart = i + 1;
        }
    }


    const maxSubarray = arr.slice(start, end + 1);

    return [maxSubarray, max];
}

// Contoh pengujian
console.log(arrSum([-2, -3, 4, -1, -2, 1, 5, -3])); // Output: [[4, -1, -2, 1, 5], 7]
