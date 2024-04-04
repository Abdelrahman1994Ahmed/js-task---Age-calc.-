let date = new Date();

document.getElementById('d_sym').innerHTML = date.toDateString();

// console.log(date);

let birth_day = prompt('what is the day you were born in?')
let birth_month = prompt('what is the month you were born in?')
let birth_year = prompt('what is the year you were born in?')

today_date = [date.getDay(),date.getMonth()+1,date.getFullYear()]
birth_day = [birth_day,birth_month,birth_year]

// today_date = [1,5,6];

let age = today_date.map(function(item, index) {
    return item - birth_day[index];
})

// console.log([age[0]+30,age[1]+12,age[2]]);

document.getElementById('age_years').innerHTML = age[2];
document.getElementById('age_month').innerHTML = age[1]+12;
document.getElementById('age_days').innerHTML = age[0]+30;


let  nums = [5,91,1,6,104,99];
let sorting = nums.sort(function(a,b) {
    return a - b;
})


console.log(sorting);
