function findShort(s){
    s=s.split(' ');
    return s.every(element => element = element.length);
}
console.log(findShort('bitcoin take over the world maybe who knows perhaps'));