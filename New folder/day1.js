"use strict";
function findDayOfWeek(date) {
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex = date.getDay();
    return daysOfWeek[dayIndex];
}
// Example usage:
const day = new Date(20 | 12 | 1976);
const dayOfWeek = findDayOfWeek(day);
console.log(`day is ${dayOfWeek}`);
