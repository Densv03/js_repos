function expandedForm(num) {
    let arr = [],
        temp = 1;
    while (num > 0) {
        arr.push((num % 10) * temp);
        num = parseInt(num / 10);
        temp *= 10;
    }
    arr.reverse();
    for (let i = 0; i < arr.length; ++i)
        if (arr[i] == '0') {
            arr.splice(i, 1);
            i--;
        }
    let str = '';
    str = arr.join(' + ');

    return str;
}
console.log((expandedForm(70304)));