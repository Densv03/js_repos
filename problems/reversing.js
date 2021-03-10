function isPalindrome(line) {
    let line1=line;
    if(typeof(line) == Number)
        line1=line.toString();
    for (let i = 0; i < line.length / 2; ++i)
        if (line1[i] != line1[line1.length - 1]) return false;
    return true;
}
isPalindrome(123321)