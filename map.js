console.log("map.js file is running!");
// Import Mapbox as an ESM module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

// Check that Mapbox GL JS is loaded
console.log('Mapbox GL JS Loaded:', mapboxgl);

// 1. Set access token (Lab 7 gives you their token!)
mapboxgl.accessToken = 'pk.eyJ1IjoiZHNjMTA2bWFwcyIsImEiOiJjbGd3bHRsb3EwNXRjM2xtdHFsYmE4ZDlkIn0.HmDmvYzu3n6PvJEa3TBUnQ';

// 2. Create the map
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/light-v11',
  center: [-117.1611, 32.7157], // San Diego
  zoom: 10
});

// Log when map loads
map.on('load', () => {
  console.log('🌍 Map is fully loaded!');
});