import React from 'react'
import GoogleMapReact from 'google-map-react'
require('dotenv').config()

interface MapProps {
  lat: number,
  lng: number,
  zoom: number
}

export const Map: React.FunctionComponent<MapProps> = ({ lat, lng, zoom }) => {

  const renderMarkers = (map: any, maps: any) => {
    let marker = new maps.Marker({
      position: { lat, lng },
      map,
      title: 'Bertha Centre'
    });
    return marker;
  };
  return (
    <div style={{ height: '70vh', width: '100%' }}>
      <GoogleMapReact
        // options={mapOptions}
        bootstrapURLKeys={{
          key: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
          // key: 'AIzaSyAJm3S6KrORl1icgUTuVaVsQoFDEWRG-aQ',
          language: 'en'
        }}
        defaultCenter={{
          lat,
          lng
        }}
        defaultZoom={zoom}
        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
      />
    </div>
  )
}
