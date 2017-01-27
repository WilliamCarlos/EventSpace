angular.module('MyApp')
.controller('AppCtrl', function($scope) {
	$scope.users = ['Fabio', 'Leonardo', 'Thomas', 'Gabriele', 'Fabrizio', 'John', 'Luis', 'Kate', 'Max'];

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
	];

/*
	"name": "PennApps",
		"start_time": "is this a string",
		"end_time": "end date",
		"location": "UPenn Engineering",
		"lat": 39.9522,
		"lng": -75.1932,
		"description": "A hackathon at the University of Pennsylvania"}');*/



	//events for hackathons
	
	/*$scope.yHack = JSON.parse('{
		"name": "PennApps",
		"start_time": "is this a string",
		"end_time": "end date",
		"location": "UPenn Engineering",
		"lat": 39.9522,
		"lng": -75.1932,
		"description": "A hackathon at the University of Pennsylvania"}');*/

		//"name":"PennApps", "start_time":"is this a string", "end_time":"end date", "location":"UPenn Engineering", "lat":39.9522, "lng":-75.1932, "description":"A hackathon at the University of Pennsylvania" 

		//$scope.yHack = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
		////$scope.eventsVar = JSON.parse('{"events": [{"name1":"PennApps"}, {"name2": "yHack"}, {"name3":"3"}, {"name4": "4"}, {"name5":"5"}, {"name6": "6"}, {"name7":"7"}, {"name8": "8"}, {"name9":"9"}]}');

/* the two I was using
		$scope.yHack = JSON.parse('{ "name":"PennApps", "start_time":"is this a string", "end_time":"end date", "location":"UPenn Engineering", "lat":39.9522, "lng":-75.1932, "description":"A hackathon at the University of Pennsylvania" }');		
		$scope.eventsVar = JSON.parse('{ "events": [ "yHack": [{ "name": "yHack" }], "PennApps": [{ "name": "PennApps" }] ] }')
		*/


		//$scope.events = JSON.parse('{"events": [{"name":"PennApps"}, {"name": "yHack"}]}');

//		 "name": "yHack", "start_time": "fall", "end_time": "later fall", "location": "Yale Engineering", "lat": 39.9522, "lng": -75.1932, "description": "A hackathon at the Yale University" 

// "events": [ "yHack": { "name": "yHack", "start_time": "fall", "end_time": "later fall", "location": "Yale Engineering", "lat": 39.9522, "lng": -75.1932, "description": "A hackathon at the Yale University" }, "PennApps": { "name": "PennApps", "start_time": "is this a string", "end_time": "end date", "location": "UPenn Engineering", "lat": 39.9522, "lng": -75.1932, "description": "A hackathon at the University of Pennsylvania" }]
/*

	var eventVar = {
			"events": [
				"yHack": [{
					"name": "yHack"					
				}],
				"PennApps": [{
					"name": "PennApps"					
				}]
			]
		}


		var eventVar = {
			"events": [
			"yHack": [{
				"name": "yHack",
				"start_time": "fall",
				"end_time": "later fall",
				"location": "Yale Engineering",
				"lat": 39.9522,
				"lng": -75.1932,
				"description": "A hackathon at the Yale University"
			}],
			"PennApps": [{
				"name": "PennApps",
				"start_time": "is this a string",
				"end_time": "end date",
				"location": "UPenn Engineering",
				"lat": 39.9522,
				"lng": -75.1932,
				"description": "A hackathon at the University of Pennsylvania"
			}]
			]
		}


	
		*/


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

//Google map zoom done

//integrate backend with json format
//slide out panel for event


/*
TODO
	Get Swat headers
	
	Add Event

	Add page
	*/

/*
DONE
	Cards
	Map Integration
	Button backend + map zoom

	*/


/*
JSON FORMAT

 array.push({
	var array = [];
          name: data.name,
          start_time: data.start_time,
          end_time: data.end_time,
          location: data.location,
          lat: data.lat,
          lng: data.lng,
          description: data.description
        });

*/