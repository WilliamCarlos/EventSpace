
/*
Notes
	BECAUSE SCOPE.DATA IS LOADED ASYNCHRONOUSLY, A CONSOLE.LOG RIGHT BELOW WILL YIELD ONLY EMPTY/UNDEFINED
	*/
	var map;
	var markersArray = [];
	var currentInfoWindow;
	var selectedMarker = null;
	var currentTab = 1;
	var fetched;
	var load1 = false;
	var load2 = false;
	var noEvents = false;
	var ref = firebase.database().ref('events/now');
var cookieArrayRedundant = []; //a redundant array to store cookies in (in case cookies are disabled)

var app = angular.module('MyApp', ["firebase"])
.controller('AppCtrl', function($scope, $timeout, $firebaseArray) {
	// $('#banner').draggable();
	// $('#navtabs').draggable();
	var ref0 = firebase.database().ref('events/now').orderByChild("sorted_time");
	var ref1 = firebase.database().ref('events/day0').orderByChild("sorted_time");
	//console.log("Ref 1");
	//console.log(ref1);
	var ref2 = firebase.database().ref('events/day1').orderByChild("sorted_time");
	var markersArray0 = [];
	var markersArray1 = [];
	var markersArray2 = [];
	//Pull from firebase ref a snapshot of the events
	$scope.goFullscreen = function () {

		if (Fullscreen.isEnabled())
			Fullscreen.cancel();
		else
			Fullscreen.all();

	 // Set Fullscreen to a specific element (bad practice)
	 // Fullscreen.enable( document.getElementById('img') )
	}

	markersArray = markersArray0;
	populateMapWithEvents();
	if (noEvents) {
			//console.log("Events array is 0");
			$scope.noCurrentEvents = true;
		} else {
			$scope.noCurrentEvents = false;
		}

		//console.log("Printing ref0");
		//console.log($scope.eventsVar0);

		//delay loading until scope is done
		function show() {
			AB = document.getElementById('bottom');
			AB.style.display = 'inline';
		}
		$scope.eventsVar0 = $firebaseArray(ref0);
		$scope.eventsVar0.$loaded().then(function() {
			$scope.eventsVar0.sort(function(a,b) {
				console.log("sorting array");
				return a.count.valueOf() < b.count.valueOf();
			});
			show()
		});
		//delay loading until scope is done
		$scope.eventsVar1 = $firebaseArray(ref1)
		$scope.eventsVar1.$loaded().then(function() {
			$scope.eventsVar1.sort(function(a,b) {
				console.log("sorting array");
				return a.count.valueOf() < b.count.valueOf();
			});
		});
		$scope.eventsVar2 = $firebaseArray(ref2)
		$scope.eventsVar2.$loaded().then(function() {
			$scope.eventsVar2.sort(function(a,b) {
				console.log("sorting array");
				return a.count.valueOf() < b.count.valueOf();
			});
		});
		// console.log($scope.eventsVar);
		$scope.attendingEvent = function(eventID, day){
			//code to check if this event has already been added
			//console.log("Day is " + day + " and has type " + typeof(day));
			if(checkCookie(eventID) || checkCookieRedundant(eventID)) {
				if(checkCookieRedundant(eventID)) {
					alert("disabled cookies? get blocked by js, bitch. ur outmatched son");
				}
				alert("you already liked this event brah");
			}else{
				console.log("First time event click. Incrementing count");
				//otherwise (event not liked before) we increment count by 1
				//code to increment event.count by 1

				var databaseRef = firebase.database().ref('/events').child(day).child(eventID).child('count');
				databaseRef.transaction(function(count) {
					console.log("Count is being read as: " + count);
					console.log("currevent" + eventID);
					//if (count) { //this is returning false
					if (typeof count !== 'undefined') { //honestly don't think we even need this
						count = count + 1;
				}else{
						//count doesn't exist
					}
					console.log("New Count: " + count);
					return count;
				});
				//now, we update the display -- time to use ng-bind baby

				// var databaseRef = firebase.database().ref('/events').child('day0').child(eventID).child('count');
				// eventDate = 'now'
				// console.log("databaseRef" + databaseRef);
			}
			addEventToCookie(eventID);			
			addEventToCookieRedundant(eventID); //add to local javascript array for redundancy (if cookies are disabled)
		}
		$scope.cardClicked = function(latitude, longitude, $index) {
			console.log("latitude:" + latitude);
			console.log("longitude:" + longitude);
			console.log($index);
			updateMapLocation(latitude, longitude);
			//markersArray[eventId].infowindow.open(map, markersArray[eventId]);
			if (currentInfoWindow) currentInfoWindow.close();
			markersArray[$index].infowindow.open(map, markersArray[$index]);
			currentInfoWindow = markersArray[$index].infowindow;
		}
		$('.nav-tabs a').click(function (e) {
			e.preventDefault();
			currentTab = $($(this).attr('href')).index();
		 //hide previous markers
		 hideMarkers();
		 //based on new tab, either pull data if haven't pulled yet or unhide previously hidden markers.
		 if (currentTab == 0) {
		 	document.getElementById('tab0').style.width = "40%";
		 	document.getElementById('tab1').style.width = "30%";
		 	document.getElementById('tab2').style.width = "30%";
		 	ref = ref0;
		 	markersArray = markersArray0;
		 	unhideMarkers();
		 } else if (currentTab == 1) {
		 	document.getElementById('tab1').style.width = "40%";
		 	var now = document.getElementById('tab0').style.width = "30%";
		 	document.getElementById('tab2').style.width = "30%";
		 	ref = ref1;
		 	markersArray = markersArray1;
		 	if (!load1) {
		 		populateMapWithEvents();
		 		load1 = true;
		 	} else {
		 		unhideMarkers();
		 	}
		 } else if (currentTab == 2) {
		 	document.getElementById('tab2').style.width = "40%";
		 	document.getElementById('tab0').style.width = "30%";
		 	document.getElementById('tab1').style.width = "30%";
		 	ref = ref2;
		 	markersArray = markersArray2;
		 	if (!load2) {
		 		populateMapWithEvents();
		 		load2 = true;
		 	} else {
		 		unhideMarkers();
		 	}
		 } else {
		 	ref = ref0;
		 	markersArray = markersArray0;
		 	unhideMarkers();
		 }
 	// 	  });
 	// 		// sortEventsByDate();
 	// 	});
 });
	});


/* ############################## ABOVE JUST CALLS addEventToCookie #########################*/
	/*  We're going to have 1 cookie that stores the array of eventID's that have been liked.
		We'll call this array likedEvents.

		likedEvents is maintained in a single cookie as a JSON string.
		*/
	//adds an eventID to the cookie
	function addEventToCookie(eventID) { //eventID is a string containing the ID
		console.log("add event to cookie");
		var expires = "";
		//days stores how long we want to store the cookie (in our case, as long as possible)
		var days = 7;
		var date = new Date();
		date.setTime(date.getTime() + (days*24*60*60*1000));
		expires = "; expires=" + date.toUTCString();

		var cookieArray = getCookieArray();
		//console.log("is array?: " + $.isArray(cookieArray));  So we getting an array

		//add the eventID to likedEvents if it isn't already there
		if(!checkCookie(eventID)) {
			cookieArray.push(eventID);
		}

		/*-------------------------------------------------------------------------------------------------*/

		name="likedEvents";
		value=JSON.stringify(cookieArray);
		document.cookie = name + "=" + value + expires + "; path=/";
	}

//add cookie to the js cookie array
	function addEventToCookieRedundant(eventID) { //eventID is a string containing the ID
		if(!checkCookieRedundant(eventID)) {
			cookieArrayRedundant.push(eventID);
		}
	}

	//returns whether the eventId is in the cookie array
	function checkCookie(eventID) {
		cookieArray = getCookieArray();

		var cookieExists = false;
		for(i=0; i<cookieArray.length; i++) {
			if(cookieArray[i] == eventID) {
				cookieExists = true;
			}
		}
		return cookieExists;
	}

	function checkCookieRedundant(eventID) {
		var cookieExists = false;
		for(i=0; i<cookieArrayRedundant.length; i++) {
			if(cookieArrayRedundant[i] == eventID) {
				cookieExists = true;
			}
		}
		return cookieExists;
	}

	//returns the cookie in array format
	function getCookieArray() { //this function is not working correctly. should be returning cookiearray but is return empty
		if(!document.cookie.length>0) {
			console.log("no cookie for cookiemonster"); //tfw no cookie for cookiemonster. problem is in add cookie
		}
		if (document.cookie.length > 0) {
			c_start = document.cookie.indexOf("likedEvents" + "=");
			if (c_start != -1) {
				c_start = c_start + "likedEvents".length + 1;
				c_end = document.cookie.indexOf(";", c_start); //does JSON string have ;?  No.
				if (c_end == -1) {
					c_end = document.cookie.length;
				}
				var jsonStringArray = unescape(document.cookie.substring(c_start, c_end));
				var cookieArray = JSON.parse(jsonStringArray);
				//console.log("what getCookieArray is returning immediately below");
				//console.log(cookieArray);
				return cookieArray;

				//var arr = [];
				//return arr;
			}
		} //else
		var arr = [];
		return arr; //should we return -1 here?  maybe split it into: var arr=[], return arr
	}

	function sortByTime(){

	}

	function initMap() {
		var uluru = {lat: 39.905217, lng: -75.354186};
		map = new google.maps.Map(document.getElementById('map'), {
			zoom: 17,
			center: uluru,
			mapTypeControlOptions: {
				style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
			}
		});
	}
	function hideMarkers() {
		for (var i = 0; i < markersArray.length; i++ ) {
			markersArray[i].setVisible(false);
		}
	}
	function unhideMarkers() {
		for (var i = 0; i < markersArray.length; i++ ) {
			markersArray[i].setVisible(true);
		}
	}
	function populateMapWithEvents() {
		ref.once('value', function(snapshot) {
			if(snapshot.hasChildren()){
				//console.log("snapshot has children")
				noEvents = false;
			}
			// console.log("fetching snapshot");
			// var tempArray = snapshot;
			// console.log("attempting to sort snapshot");
			// console.log(tempArray);
			// tempArray.sort(function(a,b) { return a.val().sortedTime > b.val().sortedTime;});
			// console.log(tempArray);
			snapshot.forEach(function(childSnapshot) {

				var childData = childSnapshot.val();
 //###add childData to array, end for each loop, sort array, iterate through new sorted array and add markers###
			 //populateMapWithEvents(childData.lat, )
			 var marker = new google.maps.Marker({
			 	title: childData.name,
			 	position: new google.maps.LatLng(childData.lat, childData.lng),
			 	map: map,
			 	//icon: 'images/dot.png'
			 	icon: {
			 		path: google.maps.SymbolPath.BACKWARD_CLOSED_ARROW,
			 		scale: 5,
			 		strokeColor: '#831f33',
			 		fillOpacity: 0.8
			 	},
			 });

			 // id = marker.__gm_id;
			 markersArray.push(marker);
			 //markersArray[childData.eventId] = marker;
			 var contentString = '<div id="content">'+
			 '<div id="siteNotice">'+
			 '</div>'+
			 '<h1 id="firstHeading" class="firstHeading">' + childData.name + '</h1>'+
			 '<div id="bodyContent">'+
			 '<p>' + childData.location + '</p>'+
			 '<p>' + "Description: " + childData.description + '</p>'+
			 '</div>'+
			 '</div>';
			 marker.infowindow = new google.maps.InfoWindow({
			 	content: contentString
						 //  content: "Title: " + childData.name + "\ " + "Description: " + childData.eventDescription

						});
			 google.maps.event.addListener(marker, 'click', function() {
			 	if (currentInfoWindow) currentInfoWindow.close();
			 	marker.infowindow.open(map, marker);
			 	currentInfoWindow = marker.infowindow;
			 });
			});
		});
	}
	function updateMapLocation(latitude, longitude) {
		var location = new google.maps.LatLng(latitude, longitude);
		map.panTo(location);
		map.setZoom(18);
	}
