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
          <div className='w-8/12'>
          <p className="text-xl leading-tight tracking-wide mb-4">
            The South African government has allowed walking or jogging between 6am and 9am.
          </p>
          </div>
          <div className='w-8/12'>
          <p className="text-xl leading-tight tracking-wide mb-4">
          Allow access to location and see where your 5km radius ends.
          </p>
          </div>
        </div>
      </header>

      <main className='flex justify-center'>
        <div style={{ height: '70vh', width: '70%' }} className='border-gray-700 border-solid border-4 shadow-lg rounded-lg'>
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
