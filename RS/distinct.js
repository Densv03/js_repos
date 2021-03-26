positiveSum = arr => {
    let sum = 0;
    for (i in arr)
        arr[i] > 0 ? sum += arr[i] : sum += 0;
    return sum;
}
console.log(positiveSum([1, -2, 3, 4, 5]));