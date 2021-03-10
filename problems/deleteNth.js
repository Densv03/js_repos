function deleteNth(arr, n) {
    let max = -100000;
    for (let i = 0; i < arr.length; ++i)
        max = Math.max(max, arr[i]);
    let cnt = [];
    for (let i = 0; i < max + 2; ++i)
        cnt.push(0);
    for (let i = 0; i < arr.length; ++i) {
        cnt[arr[i]]++;
        if (cnt[arr[i]] > n) {
            arr.splice(i, 1);
            i--;
        }
    }
    return arr;
}
console.log(deleteNth([1, 1, 1, 2, 2, 2, 3, 4, 1, 2, 3, 2], 1));