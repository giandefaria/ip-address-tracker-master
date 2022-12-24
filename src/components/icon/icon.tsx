import L from "leaflet"
import icon from "../../assets/icon-location.svg"

export default L.icon({
    iconSize: [25, 32],
    iconAnchor: [8,38],
    popupAnchor: [2, -40],
    iconUrl: icon,
})