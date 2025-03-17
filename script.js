	function daysOfAYear(year) {
    // Leap year check: divisible by 4, not divisible by 100 unless divisible by 400
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return 366;
    } else {
        return 365;
    }
}

// Example usage
console.log(daysOfAYear(2022)); // 365
console.log(daysOfAYear(2024)); // 366
console.log(daysOfAYear(1900)); // 365
console.log(daysOfAYear(2000)); // 366

