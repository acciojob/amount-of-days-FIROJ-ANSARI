	function daysofAYear(params) {
		if(params % 4 == 0){
		params % 100 == 0;
		params % 400 == 0;
		console.log("366")
			return 366;
	}
     else{
		return 365;
	 }
	}
console.log(daysOfAYear(2022))
console.log(daysOfAYear(2024))
console.log(daysOfAYear(1900))
console.log(daysOfAYear(2000))
