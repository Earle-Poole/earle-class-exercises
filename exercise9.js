let arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];


//sort the array
let arraySort = arr => {
	arr.sort(f = (a,b) => {
		return a-b;
	});
	//keep count of how many numbers matched
	let count = 0;
	arr.forEach(f = (num, i) => {
		//for every num check if it matches next num
		if(arr[i] === arr[i + 1]){
		//+1 to count if a match is found
		count++;
		//if num doesnt match the next number, but does match the previous number
		//then the first match is replaced with an array made by a slice
		} else if (arr[i] !== arr[i + 1] && arr[i] === arr[i - 1]){
			arr[i - count] = arr.slice(i - count, i + 1);
			count = 0;
		}
	})
	arr.forEach(f = (num, i) => {
		//if there is an array in position i && the array in position i's first value is
		//equal to the next value then delete that next value
		while(arr[i][0] && arr[i][0] === arr[i + 1]){
    		arr.splice(i + 1, 1)
		}
	})
	return arr;

}

/*Write a javascript function that takes an array of numbers 
and a target number. The function should find two different 
numbers in the array that, when added together, give the target number.
For example: answer([1,2,3], 4)should return [1,3]*/
let answer = (arr, sum) => {
	//go over every num in arr; i is the index num is in arr
	arr.forEach(f = (num, i) => {
		//while x is less than or equal to the number of values in arr, run this function
		for(let x = 1; x <= arr.length; x++){
			//if num in position i + the num in position (i + x) equal the sum 
			if(arr[i] + arr[i + x] == sum){
				// values will be an array of the working nums
				let values = [arr[i], arr[i + x]];
				console.log(values);
				return values
			}
		}
	})
}
answer([1,2,3,4,5,6,7,8,9,10],14)

/*Write a function that converts HEX to RGB. Then Make that function 
auto-detect the formats so that if you enter HEX color format it returns 
RGB and if you enter RGB color format it returns HEX.*/

//argument should be 6-digit hex string (NO #) OR an array with 3 values 0-255.
let hexOrRgb = (HEXRGB) => {
	let newHex;
	if(typeof HEXRGB === "object"){
		newHex = "#";
		HEXRGB.forEach(f = (num, i) =>{
			let hexedNum = num.toString(16)
			if(hexedNum.length === 2){
			newHex += hexedNum;
			} else if(hexedNum.length === 1){
			newHex += "0";
			newHex += hexedNum
			}
		})

	} else if (typeof HEXRGB === "string"){
		newRGB = [];
		R = []; G = []; B = [];
		for(let i = 0; i < HEXRGB.length; i+=2){
			if(i == 0){
				R.push(HEXRGB.slice(i, i+2))
			} else if(i == 2){
				G.push(HEXRGB.slice(i, i+2))
			} else if(i == 4){
				B.push(HEXRGB.slice(i, i+2))
			}
		}
		newRGB.push(parseInt(R, 16));
		newRGB.push(parseInt(G, 16));
		newRGB.push(parseInt(B, 16));
	}
	if(newHex)console.log(newHex);
	if(newRGB)console.log(newRGB);
}