mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zZXBocm0iLCJhIjoiY200ZmdrN3E4MTkzNDJ3cXF3ODZmbmQ3NiJ9.yixRqqhnw4759HTdZY_dwQ';
navigator.geolocation.getCurrentPosition(successLocation, 
    errorLocation, { 
    enableHighAccuracy: true
});
function successLocation(position) {
    console.log(position);
    setupMap([position.coords.longitude, position.coords.latitude]);
}
function errorLocation() {
    setupMap([77.4987 , 12.9237]);
}
function setupMap(center) {
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center, 
        zoom: 15
    });
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav);
    var directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken
      })
      map.addControl(directions, 'top-left');
}
