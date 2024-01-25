let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toISOString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());

// (Year,Month,Date,Hour,Minit,Secound)

let myCurrentDate = new Date(2024, 0, 23);
console.log(myCurrentDate.toDateString());

let myTimeStamp = Date.now()
console.log(myCurrentDate)
