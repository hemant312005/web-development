// 1. Create a fixed assignment submission date
let deadline = new Date(2026, 10, 20, 14, 30, 0);

let fullDate = deadline.toDateString();

// 2. Get date and time information
let year = deadline.getFullYear();
let month = deadline.getMonth() + 1;
let day = deadline.getDate();
let weekday = deadline.getDay();

let hours = deadline.getHours();
let minutes = deadline.getMinutes();
let seconds = deadline.getSeconds();

// 3. Indian date format
let indianDate = deadline.toLocaleDateString("en-IN");

// 4. Change deadline using setter methods
let updatedDeadline = new Date(deadline);
updatedDeadline.setFullYear(2026);
updatedDeadline.setMonth(11);
updatedDeadline.setDate(15);

let updatedDate = updatedDeadline.toDateString();

// 5. Reminder date: seven days before updated deadline
let reminderDate = new Date(updatedDeadline);
reminderDate.setDate(reminderDate.getDate() - 7);

// 6. ISO format
let isoDate = updatedDeadline.toISOString();