function humanReadable(seconds) {
    let hours, minutes, sec;
    hours=parseInt(seconds/3600);
    minutes=parseInt(seconds/60%60);
    sec=parseInt(seconds%3600%60);
    let answer="";
    answer+=parseInt(hours/10);
    answer+=parseInt(hours%10);
    answer+=':';
    answer+=parseInt(minutes/10);
    answer+=parseInt(minutes%10);
    answer+=':';
    answer+=parseInt(sec/10);
    answer+=parseInt(sec%10);
    return answer;
}
console.log(humanReadable(86399));