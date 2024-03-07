function findDayOfWeek(date: Date): string {
    const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex: number = date.getDay();
    
    return daysOfWeek[dayIndex];
}

// Example usage:
const day: Date = new Date(20|12|1976);
const dayOfWeek: string = findDayOfWeek(day);

console.log(`day is ${dayOfWeek}`);
