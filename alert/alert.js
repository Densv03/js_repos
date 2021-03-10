'use string';
let money, time;
money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    saving: false
};

for (let i = 0; i < 2; ++i) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
        b = prompt("Во сколько обойдется?");
    if (typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50) {
        appData.expenses[a] = b;
        console.log("[log] Success");
    } else {
        i--;
        console.log("[log] Write error");
    }
}
//let i=0;
// while(i<2){
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");
//     if (typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50){
//         appData.expenses[a] = b;
//         console.log("[log] Success");
//     }
//     else{
//         i--;
//         console.log("[log] Write error");
//     }
//     i++;
// }
// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
//         b = prompt("Во сколько обойдется?");
//     if (typeof (a) != null && typeof (b) != null && a != '' && b != '' && a.length < 50){
//         appData.expenses[a] = b;
//         console.log("[log] Success");
//     }
//     else{
//         i--;
//         console.log("[log] Write error");
//     }
//     i++;
// }while(i<2);
let days = 30;
appData.moneyPerDay = appData.budget / days;
alert("Ежедневный бюджет: " + appData.moneyPerDay);