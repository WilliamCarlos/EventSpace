
/*
Notes
	BECAUSE SCOPE.DATA IS LOADED ASYNCHRONOUSLY, A CONSOLE.LOG RIGHT BELOW WILL YIELD ONLY EMPTY/UNDEFINED
	*/

	angular.module('MyApp', ["firebase"])
	.controller('AppCtrl', function($scope, $firebaseArray) {
		var ref = firebase.database().ref('events')/*.child("messages");*/

		$scope.eventsVar = $firebaseArray(ref);		

		$scope.viewEvent = function(){
			alert("yea boi");
			var swarthmore = {lat: 39.9021, lng: -75.3499}
			updateMapLocation(swarthmore);
		}


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
			/*map.animateCamera(CameraUpdateFactory.newLatLngZoom(newLocation, 15));*/
		});


		var marker = new google.maps.Marker({
			position: newLocation,
			map: map
		});
	}


