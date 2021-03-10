function findShort(s){
  s=s.split(' ');
  let answer=1000000;
  for(let i=0;i<s.length;++i){
    let temp_str=s[i];
    answer=Math.min(temp_str.length,answer);
  }
  return answer;
}
console.log(findShort("turns out random test cases are easier than writing out basic ones"));