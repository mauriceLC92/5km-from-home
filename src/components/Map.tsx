import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react'
import { MapOnClick } from '../App';
require('dotenv').config()
interface MapProps {
  lat: number,
  lng: number,
  zoom: number,
  test: (params: MapOnClick) => void;
}

export const Map: React.FunctionComponent<MapProps> = ({ lat, lng, zoom, test }) => {
  const renderMarker = (map: any, maps: any) => {
    const marker = new maps.Marker({
      position: { lat, lng },
      map,
      title: 'Your Home',
      draggable: true,
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
      center: { lat, lng },
      radius: 4000,
    });
    return circle
  }

  return (
    <GoogleMapReact
      key={lat}
      bootstrapURLKeys={{
        key: `${process.env.REACT_APP_GOOGLE_API_KEY}`,
        language: 'en'
      }}
      defaultCenter={{
        lat,
        lng
      }}
      yesIWantToUseGoogleMapApiInternals
      draggable={true}
      defaultZoom={zoom}
      onGoogleApiLoaded={({ map, maps }) => {
        return (
          renderRadius(map, maps),
          renderMarker(map, maps)
        )
      }}
      onClick={(value) => {
        test(value)
      }}
    />
  )
}
