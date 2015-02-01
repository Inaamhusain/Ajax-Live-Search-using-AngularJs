var app = angular.module("instantSearch", []);
app.filter('searchFor', function(){
	return function(arr, searchString){
		if(!searchString){
			return arr;
		}
		var result = [];
		searchString = searchString.toLowerCase();
		angular.forEach(arr, function(item){
			if(item.title.toLowerCase().indexOf(searchString) !== -1){
				result.push(item);
			}
		});
		return result;
	};
});

function InstantSearchController($scope,$http){
	$http.get('data.json').
	success(function(data, status, headers, config) {
		$scope.items = data.data;
	}).
	error(function(data, status, headers, config) {
		// log error
	});
}
