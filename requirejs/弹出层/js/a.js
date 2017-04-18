define(function(){
	function arrSort(arr){
		arr.sort(function(a,b){
			return a-b;
		});
		return arr;
	}
	return arrSort;
});