import { useEffect } from "react"
import { Marker, Popup, useMap } from "react-leaflet"
import {
  latitude,
  longitude
} from "../main/main"
import icon from "../icon/icon"

//função marcar posição. Pega os valores atualizados do main

export default function Markerposition() {

  const position = [latitude, longitude]
  const map = useMap()
  console.log(position);

  useEffect(() => {

    map.flyTo(position as [number, number], 13, {
      animate: true
    })

  }, [map, position]);

  console.log('teste')

  return (
    <>
      <Marker icon={icon} position={position as [number, number]}>
        <Popup>This is the location of the IP Address or Domain</Popup>
      </Marker>
    </>
  )

}

