// var map = L.map('map').setView([51.505, -0.09], 13); // Replace with your venue coords
// L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
// }).addTo(map);

// // Placeholder for heatmap data
// var heat = L.heatLayer([], { radius: 25 }).addTo(map);

// // Fetch data every 2 seconds
// function updateHeatmap() {
//     fetch('/data')
//         .then(response => response.json())
//         .then(data => heat.setLatLngs(data));
// }
// setInterval(updateHeatmap, 2000);
// updateHeatmap();

var map = L.map('map').setView([51.505, -0.09], 15);  // Zoom level 15;
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

var heat = L.heatLayer([], {
    radius: 25,
    max: 1.0,  // Max intensity for scaling
    gradient: { 0.2: 'blue', 0.5: 'yellow', 0.8: 'red' }  // Custom gradient
}).addTo(map);

function updateHeatmap() {
    fetch('/data')
        .then(response => response.json())
        .then(data => {
            console.log("Data:", data);  // Debug to confirm data
            heat.setLatLngs(data);
        })
        .catch(error => console.error("Error:", error));
}
setInterval(updateHeatmap, 2000);
updateHeatmap();