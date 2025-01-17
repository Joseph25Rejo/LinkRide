// Initialize Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9zZXBocm0iLCJhIjoiY200ZmdrN3E4MTkzNDJ3cXF3ODZmbmQ3NiJ9.yixRqqhnw4759HTdZY_dwQ';

// Store markers array and map globally
let markers = [];
let map;
let userLocationMarker;

// Get user's location
navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
    enableHighAccuracy: true,
    timeout: 5000
});

function successLocation(position) {
    setupMap([position.coords.longitude, position.coords.latitude]);
}

function errorLocation() {
    setupMap([77.4987, 12.9237]); // Default location
}

function setupMap(center) {
    // Initialize map
    map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: center,
        zoom: 15
    });

    // Add navigation controls
    const nav = new mapboxgl.NavigationControl();
    map.addControl(nav, 'top-right');

    // Add directions control
    const directions = new MapboxDirections({
        accessToken: mapboxgl.accessToken,
        unit: 'metric',
        profile: 'mapbox/driving',
        alternatives: true,
        geometries: 'geojson',
        controls: {
            instructions: true,
            profileSwitcher: true
        },
        flyTo: true
    });
    map.addControl(directions, 'top-left');

    // Add geolocate control
    const geolocate = new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true,
        showUserHeading: true
    });
    map.addControl(geolocate, 'top-right');

    // Add scale control
    const scale = new mapboxgl.ScaleControl({
        maxWidth: 80,
        unit: 'metric'
    });
    map.addControl(scale, 'bottom-left');

    // Add fullscreen control
    map.addControl(new mapboxgl.FullscreenControl(), 'top-right');

    // Add custom marker functionality
    map.on('click', function(e) {
        addMarker(e.lngLat);
    });

    // Add map event listeners
    map.on('load', () => {
        // Add custom layer controls
        addLayerControls();
        
        // Initialize user location marker
        if (center) {
            userLocationMarker = new mapboxgl.Marker({
                color: '#FF0000',
                scale: 0.8
            })
            .setLngLat(center)
            .addTo(map);
        }
    });

    // Add custom controls for marker management
    addCustomControls();
}

function addMarker(lngLat) {
    const marker = new mapboxgl.Marker({
        draggable: true,
        color: '#' + Math.floor(Math.random()*16777215).toString(16) // Random color
    })
    .setLngLat(lngLat)
    .addTo(map);

    // Add popup to marker
    const popup = new mapboxgl.Popup({
        offset: 25,
        closeButton: true,
        closeOnClick: true
    })
    .setHTML(`
        <h3>Custom Marker</h3>
        <p>Coordinates: ${lngLat.lng.toFixed(4)}, ${lngLat.lat.toFixed(4)}</p>
        <button onclick="removeMarker(${markers.length})">Remove</button>
    `);

    marker.setPopup(popup);
    markers.push(marker);
}

function removeMarker(index) {
    if (markers[index]) {
        markers[index].remove();
        markers.splice(index, 1);
    }
}

function addCustomControls() {
    // Add custom control for clearing all markers
    class ClearMarkersControl {
        onAdd(map) {
            this.map = map;
            this.container = document.createElement('div');
            this.container.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
            this.container.innerHTML = `
                <button class="mapboxgl-ctrl-icon" title="Clear all markers">
                    🗑️
                </button>`;
            this.container.onclick = () => {
                markers.forEach(marker => marker.remove());
                markers = [];
            };
            return this.container;
        }
        onRemove() {
            this.container.parentNode.removeChild(this.container);
            this.map = undefined;
        }
    }

    map.addControl(new ClearMarkersControl(), 'top-right');
}

function addLayerControls() {
    // Add layer toggle controls
    const layerList = document.createElement('div');
    layerList.className = 'mapboxgl-ctrl mapboxgl-ctrl-group';
    layerList.style.backgroundColor = 'white';
    layerList.style.padding = '10px';

    const layers = [
        { id: 'streets-v11', text: 'Streets' },
        { id: 'satellite-v9', text: 'Satellite' },
        { id: 'navigation-night-v1', text: 'Night' }
    ];

    layers.forEach(layer => {
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'active';
        link.textContent = layer.text;
        link.style.display = 'block';
        link.style.padding = '5px';
        link.style.textDecoration = 'none';
        link.style.color = '#404040';

        link.onclick = function(e) {
            e.preventDefault();
            map.setStyle('mapbox://styles/mapbox/' + layer.id);
        };

        layerList.appendChild(link);
    });

    document.body.appendChild(layerList);
}

// Add event listener for directions updates
document.addEventListener('directions.route', (e) => {
    const routes = e.detail.routes;
    if (routes && routes.length > 0) {
        // Get turn-by-turn instructions
        const steps = routes[0].legs[0].steps;
        console.log('Turn-by-turn instructions:', steps);
    }
});