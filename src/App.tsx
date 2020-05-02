import React, { useState } from 'react';
import { Map } from './components/Map'
import { MapLoading } from './components/MapLoading';

export interface MapOnClick {
  event: any;
  lat: number;
  lng: number;
  x: number;
  y: number;
}
function App() {
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);

  const test = (params: MapOnClick) => {
    setLatitude(params.lat)
    setLongitude(params.lng)
  }
  const displayLocationInfo = (position: any) => {
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
  const hasLngAndLat = latitude && longitude;
  return (
    <div>
      <header className="App-header">
        <div className='bg-gray-300 flex justify-center flex-col items-center'>
          <div>
            <h1 className='text-6xl text-center'>
              5km From Home{' '} 
              <span className='text-6xl' role="img" aria-label="map">🇿🇦</span>
            </h1>
          </div>
          <div className='w-8/12'>
            <p className="text-xl leading-tight tracking-wide mb-4">
              The South African government has allowed walking, jogging and cycling between <span className='font-bold'>6am and 9am.</span>
            </p>
          </div>
          <div className='w-8/12'>
            <p className="text-xl leading-tight tracking-wide mb-4">
              Stay home. Stay safe <span className='text-xl' role="img" aria-label="map">😷</span>
            </p>
          </div>
        </div>
      </header>

      <main className='flex justify-center'>
        <div style={{ height: '70vh', width: '70%' }} className='border-gray-700 border-solid border-4 shadow-lg rounded-lg flex items-center justify-center'>
          {
            hasLngAndLat ?
              <Map zoom={12} lng={longitude} lat={latitude} test={test}/>
              : <MapLoading />
          }
        </div>
      </main>
      <footer className='flex justify-center mt-10'>
        <p className='text-xs'>
          Made with lockdown in mind <span className='text-xl' role="img" aria-label="map">🔒</span> &copy; 2020
          </p>
      </footer>
    </div>
  );
}

export default App;
