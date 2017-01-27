angular.module('MyApp')
.controller('AppCtrl', function($scope) {
	$scope.users = ['Fabio', 'Leonardo', 'Thomas', 'Gabriele', 'Fabrizio', 'John', 'Luis', 'Kate', 'Max'];

	//initialize eventsArray[]. Populate with array.push() from firebase
	$scope.eventsArray = [];

	$scope.eventsVar = [
		{"name":"yHack", "time":"fall"},
		{"name":"PennApps", "time":"spring"},
		{"name":"3", "time":"future3"},
		{"name":"4", "time":"future4"},
		{"name":"5", "time":"future5"},
		{"name":"6", "time":"future6"},
		{"name":"7", "time":"future7"},
		{"name":"8", "time":"future8"},
		{"name":"9", "time":"future9"}
	];



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