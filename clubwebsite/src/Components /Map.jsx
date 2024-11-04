import React from 'react'
import { MapContainer,TileLayer,Marker,Popup } from 'react-leaflet'

export default function Map() {

    // creating coordinates for the specific location
    const coordinates=[9.0889,76.4912]

    return (
    <MapContainer center={coordinates} zoom={13} style={{height:"500px",width:"100%"}}>
      <TileLayer 
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={coordinates}>
        <Popup>
          Welcome to Amritapuri!
        </Popup>
      </Marker>
    </MapContainer>
  )
}
