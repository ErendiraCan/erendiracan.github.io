function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(20.510749, -86.949324),
        zoom: 5,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}