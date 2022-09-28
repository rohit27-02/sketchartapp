import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';



mapboxgl.accessToken = 'pk.eyJ1Ijoic2tldGNoYXJ0IiwiYSI6ImNsNW5maTh2ZzBlcmIzZXBmcnR2ZHpkYXUifQ.qIF3V5Kc2_6MBxb3nuR0lQ';

export default function App() {
 
  
  const [lng, setLng] = useState(72.853710);
  const [lat, setLat] = useState(19.161180);
  const [zoom, setZoom] = useState(16);

  // useEffect(() => {
  //   map.current.flyTo({
  //     center: [lng, lat],
  //     essential: true // this animation is considered essential with respect to prefers-reduced-motion
  //     });
  // }, []);


   const map = new mapboxgl.Map({
      container: "map",
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng,lat],
      zoom: zoom,
      
     
    })
   
    
      const marker = new mapboxgl.Marker()
.setLngLat([lng, lat]).setPopup( new mapboxgl.Popup({ offset: 25 }).setText(
  "12, Nirmal Rubber Compound ,Opp Rocky Ind. Estate, I.B Patel Road, Goregaon East, Mumbai-400063"
  )).addTo(map);



  map.addControl(
    new mapboxgl.GeolocateControl({
    positionOptions: {
    enableHighAccuracy: true
    },
    // When active the map will receive updates to the device's location as it changes.
    trackUserLocation: true,
    // Draw an arrow next to the location dot to indicate which direction the device is heading.
    showUserHeading: true
    })
    );
    
  
 

  return (
    <div>
     
      <div id='map'  />
    </div>
  );
}
