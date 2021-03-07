function findOutlier(integers) {
    let size = integers.length,
        evens = 0,
        odds = 0,
        sameNums = 0;
    for (let i = 0; i < size; ++i) {
        if (integers[i] % 2 == 0)
            evens++;
        else
            odds++;
    }
    let temp_arr=[evens,odds];
    return temp_arr;
    if (odds > evens) {
        for (let i = 0; i < size; ++i)
            if (integers[i] % 2 == 0) return integers[i];
    } else {
        for (let i = 0; i < size; ++i)
            if (integers[i] % 2 == 1) return integers[i];
    }
}
console.log(findOutlier([63569588, -165954234, -184765930, -184693870, -67750560, -29738193, 72405508, 174438828, 24564102, 78977952, -168937968, -12281318, -116950886, -64561408, -182124820, 119088560, 31989614]));