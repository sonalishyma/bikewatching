console.log('map.js file is running!');

// Import Mapbox as an ESM module
import mapboxgl from 'https://cdn.jsdelivr.net/npm/mapbox-gl@2.15.0/+esm';

// Check that Mapbox GL JS is loaded
console.log('Mapbox GL JS Loaded:', mapboxgl);

// 1. Set access token
mapboxgl.accessToken = 'YOUR_TOKEN_HERE';  // keep yours

// 2. Create the map
const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12', // REQUIRED
  center: [-117.1611, 32.7157],                // or Boston, etc.
  zoom: 12,
});

// Log when map loads
map.on('load', () => {
  console.log('🗺️ Map is fully loaded!');
});