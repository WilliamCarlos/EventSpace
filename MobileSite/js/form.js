
//Get modal
var modal = document.getElementById('myModal');

//grabs form
var form = document.getElementById('form');

// Get the button that opens the modal
var btn = document.getElementById("addBtn");

// Get the button that submits form
var sbmt = document.getElementById("sbmt");

// Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

angular.module('MyForm', ['ngMaterial', 'ngMessages']).controller('FormCtrl', function($scope) {
    $scope.event = {
      name: 'Enter Event Name',
      location: '',
      description: 'Enter Event Description',
      startTime: 'Google',
      endTime: '1600 Amphitheatre Pkwy',
    };
    console.log("loaded Form");

  })
  .config(function($mdThemingProvider) {

    // Configure a dark theme with primary foreground yellow

    $mdThemingProvider.theme('docs-dark', 'default')
      .primaryPalette('yellow')
      .dark();

  });
