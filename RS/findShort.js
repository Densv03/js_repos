function findShort(s) {
    let ans = [];
    return s.split(' ').forEach((element, index) => {
        ans[index] = element.length;
    });
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));