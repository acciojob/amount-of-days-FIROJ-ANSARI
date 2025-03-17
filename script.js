	function daysofAYear(params) {
		if(params % 400 == 0){
		console.log(366);
			return 366;
	}
		else if (params % 100 == 0) {
			console.log(365);
			return 365;
		}
		else if (params % 4 == 0) {
			console.log(366);
				return 366;
		}
		else{
			console.log(365)
		}
console.log(daysOfAYear(2022))
console.log(daysOfAYear(2024))
console.log(daysOfAYear(1900))
console.log(daysOfAYear(2000))
