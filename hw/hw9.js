arr = [111, 1, 5, 6, 300, 11, 7, 101, 8, 99];
max = arr[0];
var findMax = function (arr) {
	for (var i = 0; i < arr.length; i++){
		if (max < arr[i]) {
			max = arr[i];
		}
	}
	return max;
}

console.log(findMax(arr));