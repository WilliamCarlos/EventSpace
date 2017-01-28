
//child id, set id path = null if passed.

       //array.push(dict.toString());
   //data = snap.exportVal();
  //});

  /*
	stringify before adding to the array
	access directly
	stringify objects, keep array
	*/
	console.log("right outside of function" + array);
	angular.module('MyApp')
	.controller('AppCtrl', function($scope) {
		console.log("right before assignment" + array);
		$scope.eventsVar = array;

/*
	//initialize eventsArray[]. Populate with array.push() from firebase
	$scope.eventsArray = [];

	$scope.eventsVar = [
	{"name":"yHack", "start_time":"fall", "end_time":"later in the fall", "location":"Yale University", "lat":45, "lng":45, "description": "A hackathon at Yale"},
	{"name":"PennApps", "start_time":"spring", "end_time":"later in the spring", "location":"The University of Pennsylvania", "lat":45, "lng":45, "description": "A hackathon at UPenn"},
	{"name":"3", "start_time":"future3", "end_time":"end_time", "location":"Location", "lat":45, "lng":45, "description": "event description"},
	{"name":"4", "start_time":"future4", "end_time":"end_time", "location":"Location", "lat":45, "lng":45, "description": "event description"},
	{"name":"5", "start_time":"future5", "end_time":"end_time", "location":"Location", "lat":45, "lng":45, "description": "event description"},
	{"name":"6", "start_time":"future6", "end_time":"end_time", "location":"Location", "lat":45, "lng":45, "description": "event description"},
	{"name":"7", "start_time":"future7", "end_time":"end_time", "location":"Location", "lat":45, "lng":45, "description": "event description"},
	{"name":"8", "start_time":"future8", "end_time":"end_time", "location":"Location", "lat":45, "lng":45, "description": "event description"},
	{"name":"9", "start_time":"future9", "end_time":"end_time", "location":"Location", "lat":45, "lng":45, "description": "event description"}
	];*/




	//loop through and add json elements to array

	//gonna try to store json elements in a different array

    //view event function
    $scope.viewEvent = function() {
    	var swarthmore = {lat: 39.9021, lng: -75.3499}
    	updateMapLocation(swarthmore);
    }
});

	function initMap() {
		var uluru = {lat: 37.4419, lng: -122.1430};

		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: uluru
		});

		var marker = new google.maps.Marker({
			position: uluru,
			map: map
		});
	}

	function updateMapLocation(newLocation) {
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 15,
			center: newLocation
		});

		var marker = new google.maps.Marker({
			position: newLocation,
			map: map
		});
	}


