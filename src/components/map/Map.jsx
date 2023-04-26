import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
  return (
    <MapContainer center={[28.534837861531575, 77.1463213185476]} zoom={15} scrollWheelZoom={false}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[28.534837861531575, 77.1463213185476]}>
        <Popup>Heyaaa ! Here's where i live. You are free to pay a visit</Popup>
      </Marker>
      <div className="map-content">
        <h3 className="switch__color">Allahbadia</h3>
        <span>A.K.A Progxxy</span>
        <br />
        <span>Location : Shri Ram Apartment,New Delhi, India</span>
        <br />
        <span>Email: prosungupta009@gmail.com</span>
      </div>
    </MapContainer>
  )
}

export default Map
