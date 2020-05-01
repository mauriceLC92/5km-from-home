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
        bootstrapURLKeys={{
          key: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
          language: 'en'
        }}
        defaultCenter={{
          lat,
          lng
        }}
        defaultZoom={zoom}
        onGoogleApiLoaded={({ map, maps }) => {
          return (
            new maps.Circle({
              strokeColor: '#FF0000',
              strokeOpacity: 0.8,
              strokeWeight: 2,
              fillColor: '#FF0000',
              fillOpacity: 0.3,
              map,
              center: {lat, lng},
              radius: 275,
            }),
            renderMarkers(map, maps)
          )
        }}
      />
    </div>
  )
}
