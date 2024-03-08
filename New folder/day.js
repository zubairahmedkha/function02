function findDayOfWeek(date: Date): string {
    const daysOfWeek: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayIndex: number = date.getDay();
    
    return daysOfWeek[dayIndex];
}

// Example usage:
const today: Date = new Date();
const dayOfWeek: string = findDayOfWeek(today);

console.log(`Today is ${dayOfWeek}`);
