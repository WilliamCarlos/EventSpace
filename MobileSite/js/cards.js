
/*
Notes
	BECAUSE SCOPE.DATA IS LOADED ASYNCHRONOUSLY, A CONSOLE.LOG RIGHT BELOW WILL YIELD ONLY EMPTY/UNDEFINED
	*/
var map;
var markersArray = {};
var currentInfoWindow;
var selectedMarker = null;

var app = angular.module('MyApp', ["firebase"])
	.controller('AppCtrl', function($scope, $firebaseArray) {
		var ref = firebase.database().ref('events')/*.child("messages");*/
		// var ref = new Firebase('https://mapapp-2a84b.firebaseio.com');
		// $scope.firebaseObj = $firebase(ref);
		// ref.on("value", function(data) {
		//   $scope.data = data.val();
		// 	eventsArray = data.val();
		//   populateMapWithEvents(eventsArray);
		// });

		//Pull from firebase ref a snapshot of the events
		ref.on('value', function(snapshot) {
		  snapshot.forEach(function(childSnapshot) {
		    var childData = childSnapshot.val();
				//create a marker for each event
				var marker = new google.maps.Marker({
					title: childData.name,
					position: new google.maps.LatLng(childData.lat, childData.lng),
					map: map
				});
				// id = marker.__gm_id;
				// markersArray[id] = marker;
				marker.infowindow = new google.maps.InfoWindow({
							content: "Title: " + "\n" + "Description: " + "\n" + childData.description
				});
				google.maps.event.addListener(marker, 'click', function() {
                if (currentInfoWindow) currentInfoWindow.close();
                marker.infowindow.open(map, marker);
                currentInfoWindow = marker.infowindow;
          });
          //markersArray.push(marker);
			// 		//infowindow.setContent(marker.startTime, marker.endTime, marker.location, marker.description);
			// //			infowindow.open(this.map, marker);
			// 		window.google.maps.event.addListener(marker, 'click', function () {
			// 		infowindow.open(map, marker);
			// 	console.log(markersArray);
				// markersArray.push(marker);
		  });
		});
		// ref.once('value').then(function(snapshot) {
		//   eventsArray = snapshot;
		// 	populateMapWithEvents
		//
		// });
		// eventsArray = $firebaseArray(ref);
		$scope.eventsVar = $firebaseArray(ref);
		$scope.attendingEvent = function(){
			alert("You are attending the event!");
		}
		$scope.cardClicked = function(latitude, longitude, eventName, startTime, endTime, eventLocation, eventDescription) {
			console.log("latitude:" + latitude);
			console.log("longitude:" + longitude);
			updateMapLocation(latitude, longitude, eventName, startTime, endTime, eventLocation, eventDescription);
		}
		// console.log($scope.eventsVar);
		// console.log("populating map");
		// $scope.$watch('$viewContentLoaded', function() {
		// 	console.log("waiting for view to load");
		// 	console.log(eventsArray);
  	// 	$scope.$evalAsync(function() {populateMapWithEvents(eventsArray); });
		// });
});

	function initMap() {
		var uluru = {lat: 39.905217, lng: -75.354186};
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 17,
			center: uluru
		});
	}
	function populateMapWithEvents(eventsArray) {
		console.log("beginning pop");
		for (i = 0; i < eventsArray.length; i++) {
			console.log("for each in eventsArray")
			var marker = new google.maps.Marker({
				title: eventsArray[i].name,
				position: new google.maps.LatLng(eventsArray[i].lat, eventsArray[i].lng),
				map: map
			});
		}
	}
	function updateMapLocation(latitude, longitude, eventName, startTime, endTime, eventLocation, eventDescription) {
		var location = new google.maps.LatLng(latitude, longitude);
		map.panTo(location);
		map.setZoom(20);
		console.log(eventDescription);
// 		var contentString = '<h1>' + eventName + '</h1>' + '<b>Start: </b><p1>' + startTime + '</p1> <br>'  + '<b>End: </b><p1>' + endTime + '</p1> <br>' + '<b>Location: </b><p1>' + eventLocation + '</p1> <br>' + '<b>Description: </b><p1>' + eventDescription + '</p1> <br>';
//
// 		var infowindow = new google.maps.InfoWindow({
// 			content: contentString
// 		});
// 		infowindow.open(map, marker);
// 		//infowindow.setContent(marker.startTime, marker.endTime, marker.location, marker.description);
// //			infowindow.open(this.map, marker);
// 		window.google.maps.event.addListener(marker, 'click', function () {
// 			infowindow.open(map, marker);
//
//
// 		});
	//google.maps.event.trigger(marker, "click")
	//google.maps.event.trigger(marker, 'click');
}
