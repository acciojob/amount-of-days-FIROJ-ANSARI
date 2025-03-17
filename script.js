	function daysofAYear(params) {
		if(params % 400 == 0){
		console.log("Leap Year");
			return 366;
	}
		else if (params % 100 == 0) {
			console.log("Not Leap Year");
			return 365;
		}
		else if (params % 4 == 0) {
			console.log("Leap Year");
				return 366;
		}
		else{
			console.log("Not Leap Year")
		}
		
console.log(daysOfAYear(2022))
console.log(daysOfAYear(2024))
console.log(daysOfAYear(1900))
console.log(daysOfAYear(2000))
