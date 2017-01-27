angular.module('MyApp')
.controller('AppCtrl', function($scope) {
	$scope.users = ['Fabio', 'Leonardo', 'Thomas', 'Gabriele', 'Fabrizio', 'John', 'Luis', 'Kate', 'Max'];

	//initialize eventsArray[]. Populate with array.push() from firebase
	$scope.eventsArray = [];

	//add some sample events
	$scope.eventsArray.push({
		"name": "yHack",
		"start_time": "fall",
		"end_time": "later in fall",
		"location": "Yale University",
		"lat": 39.9522,
		"lng": -75.1932,
		"description": "A hackathon at Yale University"
	});
	$scope.eventsArray.push({
		"name": "PennApps",
		"start_time": "is this a string",
		"end_time": "end date",
		"location": "UPenn Engineering",
		"lat": 39.9522,
		"lng": -75.1932,
		"description": "A hackathon at the University of Pennsylvania"
	});

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
	Right now, can post eventArray[0] on all cards. Need ng-repeat to work so that it's not the same event for all cards, and 
	need to be able to access specific elements (e.g. event.name)

	Maybe make another nesting div? 

	Get Swat headers

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