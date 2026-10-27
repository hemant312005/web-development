
let currentDate = new Date();
let timestamp = Date.now();
console.log(timestamp)
let examDate = new Date(2026, 10, 20, 9, 30, 0);
console.log(examDate)
let year = examDate.getFullYear();
let month = examDate.getMonth() + 1;
let day = examDate.getDate();
let weekday = examDate.getDay();
console.log(year)
console.log(month)
console.log(day)
console.log(weekday)
let copiedDate = new Date(examDate);
console.log(copiedDate)
copiedDate.setDate(25);

let originalDate = examDate.toDateString();
let changedDate = copiedDate.toDateString();
console.log(changedDate)

let originalUnchanged = examDate.getDate() === 20;
copiedDate.setFullYear(2027);
copiedDate.setHours(14, 45, 30);

let reminderDate = new Date(examDate);
reminderDate.setDate(reminderDate.getDate() - 7);


let readableDate = examDate.toDateString();
let indianDate = examDate.toLocaleDateString("en-IN");
let isoDate = examDate.toISOString();


let dateString = "2026-11-20T09:30:00";
let parsedTimestamp = Date.parse(dateString);
