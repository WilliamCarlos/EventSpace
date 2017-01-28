
/*
Notes
	BECAUSE SCOPE.DATA IS LOADED ASYNCHRONOUSLY, A CONSOLE.LOG RIGHT BELOW WILL YIELD ONLY EMPTY/UNDEFINED
*/

angular.module('MyApp', ["firebase"])
.controller('AppCtrl', function($scope, $firebaseArray) {
	var ref = firebase.database().ref('events')/*.child("messages");*/
  // create a synchronized array
  // click on `index.html` above to see it used in the DOM!
  $scope.eventsVar = $firebaseArray(ref);
  console.log(ref);

  $scope.viewEvent = function(){
  	alert("yea boi");
  	var swarthmore = {lat: 39.9021, lng: -75.3499}
  	updateMapLocation(swarthmore);
  }
/*
.controller('AppCtrl', function($scope, $firebaseArray) {
	var ref = firebase.database().ref();
		 // download the data into a local object
		 $scope.data = $firebaseObject(ref);
  // putting a console.log here won't work, see below
  	

  	*/

  	/*console.log("right before assignment" + array);
  	$scope.eventsVar = array;*/ 

		 // Initialize Firebase


	/*	 var key;
		 var data;
		 var array = [];
		 var eventsArray = {};
		 var ref = firebase.database().ref('events');
		 var today = new Date();


		 ref.on('value',function(snap){
		 	snap.forEach(function(childSnapshot){
		//console.log(JSON.stringify(childSnapshot.val()));
		key = childSnapshot;
		data = childSnapshot.val();
		array.push(data); */

       //console.log(data)
       //var index = data.description.lastIndexOf(',')
       //var data_date = data.description.substr(index-2,2)
       //data_date = parseInt(data_date)
       //console.log(data_date)
       //console.log(curr_day)
       //if(data_date < curr_day+3){ref.child("id").remove()}//removes data is from yesterday
       //else{
       //array.push(JSON.stringify(Event(data)));

       //array.push(JSON.stringify(childSnapshot.val()));
      // array = array.concat(JSON.stringify(childSnapshot.val()));
       //console.log("array is " + array);
       //console.log("concat attempt" + array);


  /* });
		 });
		 eventsArray = data;
		 console.log("events array" + eventsArray);

		 */



	//initialize eventsArray[]. Populate with array.push() from firebase
	$scope.eventsArray = [];




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


