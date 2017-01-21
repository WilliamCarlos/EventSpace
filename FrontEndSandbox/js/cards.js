angular.module('MyApp')
.controller('AppCtrl', function($scope) {
	$scope.users = ['Fabio', 'Leonardo', 'Thomas', 'Gabriele', 'Fabrizio', 'John', 'Luis', 'Kate', 'Max'];

    //view event function
    $scope.viewEvent = function() {
    	alert("yea boi");
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