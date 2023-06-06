//Add map here
const map = L.map("map", {
    center: [35.3187,-82.4610],
    zoom: 100,
  });

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 50,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Add User Location to the map 
map.locate({setView: true, watch: true})
        .on('locationerror', function(e){
            console.log(e);
            alert("Location access has been denied.");
        });


// Get User Coordinates
async function getCoords(){
	const pos = await new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(resolve, reject)
	});
	return [pos.coords.latitude, pos.coords.longitude]
}

getCoords()
// Mark User location
const marker = L.marker([pos.coords.latitude, pos.coords.longitude])
marker.addTo(map).bindPopup('<p1><b>Home</b></p1>').openPopup()

// Get Users Selction

// Add Selection to the map

