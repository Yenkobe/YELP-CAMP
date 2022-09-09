mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: campground.geometry.coodinates,// starting position [lng, lat]
    zoom: 8, // starting zoom
    projection: 'globe' // display the map as a 3D globe
});

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coodinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campground.title}</h3>`
            )
    )
    .addTo(map);