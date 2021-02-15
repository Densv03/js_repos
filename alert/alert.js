'use string'
let money, time;
money = +prompt("Ваш бюджет на месяц?");
time = prompt("Введите дату в формате YYYY-MM-DD");
let appData = {
    budget: money,
    timeData: time,
    expenses: {
        ans1: ans2
    },
    optionalExpenses: {

    },
    income: [],
    saving: false
};
ans1 = prompt("“Введите обязательную статью расходов в этом месяце");
var ans2 = +prompt("“Во сколько обойдется?");
let days = 30;
alert("Ваш бюджет: " + appData.budget / days);