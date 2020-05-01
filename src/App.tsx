import React, { useState } from 'react';
import { Map } from './components/Map'

function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  function displayLocationInfo(position: any) {
    const lng = position.coords.longitude;
    const lat = position.coords.latitude;
    setLatitude(lat)
    setLongitude(lng)
  }

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      displayLocationInfo,
    );
  }
  else {
    console.log('geolocation is not enabled on this browser')
  }
  return (
    <div>
      <header className="App-header">
        <div className='bg-gray-300 flex justify-center flex-col items-center'>
          <div>
            <h1 className='text-6xl'>
              5km From Home
            </h1>
          </div>
          <div>
          <p className="text-2xl leading-tight tracking-wide">
            Search for your location below
          </p>
          </div>
        </div>
      </header>

      <main className='flex justify-center'>
        <div style={{ height: '70vh', width: '70%' }}>
          {
            latitude && longitude ?
            <Map zoom={12} lng={longitude} lat={latitude}/>
            : <div>Loading....</div>
          }
        </div>
      </main>
    </div>
  );
}

export default App;
