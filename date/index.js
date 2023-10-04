const date = new Date()
console.log(date);   

// getmonth() function
const month = ["jan","Feb","march","April","May","June","July","Aug","sep","oct","nov","dec"];
const index = date.getMonth();
console.log(month[index]);

//to find current date
console.log(date.getDate());

// to find current day
const day = date.getDay();
console.log(day);

// to find fullyear
const year = date.getFullYear();
console.log(year);

// to find hours
const hr = date.getHours();
console.log(hr);

// to find minutes
const min = date.getMinutes()
console.log(min);

// to find second
const sec = date.getMinutes()
console.log(min);

