import { useEffect } from "react"
import { Marker, Popup, useMap } from "react-leaflet"
import { latitude } from "./api"
import { longitude } from "./api"



export default function Markerposition() {
    
    const position = [latitude, longitude]
    const map = useMap()
    
    console.log(position);
    map.flyTo (position as [number, number], 13, {
            animate:true
     })

     console.log('teste')

     return (
        <>
          <Marker position={position as [number, number]}>
            <Popup>This is the location of the IP Address or Domain</Popup>
          </Marker>
        </>
     )

}