import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react'
require('dotenv').config()
interface MapProps {
  lat: number,
  lng: number,
  zoom: number
}

export const Map: React.FunctionComponent<MapProps> = ({ lat, lng, zoom }) => {
  const [draggable, ] = useState(true);
  const [latitude, setLatitude] = useState(lat);
  const [longitude, setLongitude] = useState(lng);

  const renderMarker = (map: any, maps: any) => {
    const marker = new maps.Marker({
      position: { lat: latitude, lng: longitude },
      map,
      title: 'Your Home',
      draggable,
    });

    return marker;
  };

  const renderRadius = (map: any, maps: any) => {
    const circle = new maps.Circle({
      strokeColor: '#FF0000',
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: '#FF0000',
      fillOpacity: 0.3,
      map,
      center: { lat: latitude, lng: longitude },
      radius: 4000,
    });
    return circle
  }

  return (
    <GoogleMapReact
      bootstrapURLKeys={{
        key: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
        language: 'en'
      }}
      defaultCenter={{
        lat: latitude,
        lng: longitude
      }}
      yesIWantToUseGoogleMapApiInternals
      draggable={draggable}
      defaultZoom={zoom}
      onGoogleApiLoaded={({ map, maps }) => {
        console.log(maps)
        return (
          renderRadius(map, maps),
          renderMarker(map, maps)
        )
      }}
      onClick={(value) => {
        setLatitude(value.lat)
        setLongitude(value.lng)
      }}
    />
  )
}
