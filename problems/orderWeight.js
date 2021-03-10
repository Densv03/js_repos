function orderWeight(strng) {
    strng = strng.split(' ');
    for (let i = 0; i < strng.length; ++i)
        strng[i] = parseInt(strng[i])
    let ans = {

    };
    for (let i = 0; i < strng.length; ++i)
        ans.strng[i]=countWeight(strng[i]);
    return ans;
}
function countWeight(num){
    let ans=0;
    while(num>0){
        ans+=num%10;
        num/=10;
    }
    return ans;
}
console.log(orderWeight("103 123 4444 99 2000"));