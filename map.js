let latitude=23.7868542, longitude=78.3643296;

//Initialising Mapbox
mapboxgl.accessToken = 'pk.eyJ1IjoiYXBvb3J2ZWxvdXMiLCJhIjoiY2ttZnlyMDgzMzlwNTJ4a240cmEzcG0xNyJ9.-nSyL0Gy2nifDibXJg4fTA';

var map = new mapboxgl.Map({
   container: "map",
   style: 'mapbox://styles/mapbox/streets-v11',
   center: [longitude, latitude],
   zoom: 5
});

map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions: {
            enableHighAccuracy: true
        },
        trackUserLocation: true
    })
);

map.addControl(
    new MapboxGeocoder({
        accessToken: mapboxgl.accessToken, 
        mapboxgl: mapboxgl
    })
);

var img1 = document.querySelector("#amber");
var marker = new mapboxgl.Marker({
    element: img1
})
.setLngLat([75.85, 26.9])
.addTo(map)

var img2 = document.querySelector("#gateway")
var marker2 = new mapboxgl.Marker({
	element: img2
})
.setLngLat([72.83, 18.9])
.addTo(map);

var img3 = document.querySelector("#gate")
var marker3 = new mapboxgl.Marker({
	element: img3
})
.setLngLat([77.22, 28.6])
.addTo(map);

var img4 = document.querySelector("#lotus")
var marker4 = new mapboxgl.Marker({
	element: img4
})
.setLngLat([77.25, 28.55])
.addTo(map);

var img5 = document.querySelector("#victoria")
var marker5 = new mapboxgl.Marker({
	element: img5
})
.setLngLat([88.34, 22.54])
.addTo(map);