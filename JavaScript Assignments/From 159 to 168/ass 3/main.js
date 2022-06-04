let Months = {"January":31,"February":28,"March":31,"April":30,"June":30,"July":31,"August":31,"September":30,"October":31,"November":30,"December":31};

let monthsArray = Object.keys(Months);

// get the last month
let currentDate = new Date();
let lastMonth = currentDate.getMonth()-1;


console.log(new Date(`${monthsArray[lastMonth]}-${Months["April"]}-${currentDate.getFullYear()}`))
console.log(`Previous Month is ${monthsArray[lastMonth]} And the last day is ${Months["April"]}`);