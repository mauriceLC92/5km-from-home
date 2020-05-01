import React from 'react'

export const MapLoading: React.FunctionComponent = () => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <span className='text-6xl' role="img" aria-label="map">🗺️</span>
        <div className="bg-orange-400 border-l-4 border-orange text-orange-900 p-4 flex flex-col justify-center items-center rounded" role="alert">
          <p className="font-bold text-black text-2 xl">Please allow 5kmfromhome to know your location</p>
          <p>The site uses your location to calculate the radius</p>
        </div>
      </div>
    </>
  )
}
