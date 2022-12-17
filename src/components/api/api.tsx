import arrow from '../../assets/styles/images/icon-arrow.svg'
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,
} from 'react-leaflet'
import { JsxAttribute } from 'typescript';
   
   
   
    export let latitude: number = 51.505;
    export let longitude: number = -0.09;
 

export function apiIp () {

    let ipOrDomain = document.querySelector('.input--ip') as HTMLInputElement;
    let ip;
    let location;
    let timezone;
    let isp;

    console.log(ipOrDomain.value); 

    fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_m25176uh13PLKuNsDz5iswx3XGnHG&ipAddress=' + ipOrDomain.value).then((Response) =>{
        
        Response.json().then((data) => {
            console.log(data);
            ip = data.ip;
            location = data.location.city + ', ' + data.location.region + "<br>" + data.location.postalCode;
            timezone = data.location.timezone;
            isp = data.isp;
            latitude = data.location.lat;
            longitude = data.location.lng
            console.log(ip);
            console.log(location);
            console.log(timezone);
            console.log(isp);
            console.log(latitude);
            console.log(longitude);

            const ipHtmlElement = document.querySelector('.ip') as HTMLElement;
            const locationHtmlElement = document.querySelector('.location') as HTMLElement;
            const timezoneHtmlElement = document.querySelector('.timezone') as HTMLElement;
            const ispHtmlElement = document.querySelector('.isp') as HTMLElement;

            ipHtmlElement.innerHTML = ip;
            locationHtmlElement.innerHTML = location;
            timezoneHtmlElement.innerHTML = timezone;
            ispHtmlElement.innerHTML = isp;

            /*const idMap = document.querySelector('#map') as HTMLElement
            idMap.after(mapRender);*/

        })

    })
}

/*function mapRender() {
 
    return (
        <div id='map'>
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}> 
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                      <Marker position={[51.505, -0.09]}>
                        <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                        </Popup>
                      </Marker>      

                    </MapContainer> 
                </div>
    )

}*/




