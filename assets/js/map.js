
let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
   // center: { lat: -34.397, lng: 150.644 },
   center: { lat: 51.5072, lng: 0.1276 },
   // 51° 30' 35.5140'' N and 0° 7' 5.1312'' W.
    zoom: 8,
  });
}

window.initMap = initMap;


// Create the script tag, set the appropriate attributes
var script = document.createElement('script');
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyAffq1hZ2R-1t1vdexwh0E5mUZu_BWJmnM&callback=initMap';
script.async = true;

/*
// Attach your callback function to the `window` object
window.initMap = function() {
  // JS API is loaded and available
}; */

// Append the 'script' element to 'head'
document.head.appendChild(script);