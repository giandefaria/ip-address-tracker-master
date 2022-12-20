import './main.css'
import arrow from '../../assets/styles/images/icon-arrow.svg'
import icon from '../icon/icon'
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,

} from 'react-leaflet'

import { useEffect, useState } from 'react'


//import '../api/api'
//import { apiIp } from '../api/api'
//import { latitude } from '../api/api'
//import { longitude } from '../api/api' 
//import Markerposition from '../api/Markerposition'



//export let latitude: number = 51.505;
//export let longitude: number = -0.09;
//export let position = [latitude, longitude];



/*console.log(latitude);
console.log(longitude);

const Test = () => {
    useEffect(() => {

    
        console.log('renderizado ok 2222')
   
   
   
   }, [latitude, longitude]);
}
*/

/*
function ApiIp() {

    let ipOrDomain = document.querySelector('.input--ip') as HTMLInputElement;
    let ip;
    let location;
    let timezone;
    let isp;

    let [latitude, setLatitude] = useState(51.505);
    let [longitude, setLongitude] = useState(-0.09);

    console.log(ipOrDomain.value);

    fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_m25176uh13PLKuNsDz5iswx3XGnHG&ipAddress=' + ipOrDomain.value).then((Response) => {

        Response.json().then((data) => {
            console.log(data);
            ip = data.ip;
            location = data.location.city + ', ' + data.location.region + "<br>" + data.location.postalCode;
            timezone = data.location.timezone;
            isp = data.isp;
            setLatitude = data.location.lat;
            setLongitude = data.location.lng
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

            const position = [latitude, longitude]
            console.log(position)
            


            /*const idMap = document.querySelector('#map') as HTMLElement
            idMap.after(mapRender);*/
            console.log('teste')
            
            
/*

        })
   
    

    })

    useEffect(() => {

    
        console.log('renderizado ok 2222')
   
   
   
   }, []);
}

*/




function PartePrincipal() {
/*    const [position, setPosition] = useState(null);
    let [latitude, setLatitude] = useState(51.505);
    let [longitude, setLongitude] = useState(-0.09);
*/
   
    let latitude = 51.505;
    let longitude = -0.09;
    //para corrigir o erro de tipo 'never', ao adicionar os atributos no  html da página, tive que indicar que é um array de qualquer tipo.
    const [apiReturn, setApiReturn] = useState(null) as Array<any>;
    const [lat, setLat] = useState(null);

    //useEffect para carregar ao iniciar a página e sempre que tiver alguma alteração. captarei o ip do usuário
    useEffect(() => {
        //tente
        try {
            //função assíncrona para pegar o ip do usuário
            const userLocation = async () => {
                //pegue a resposta, que será após aguardar o retorno da api 
                const resposta = await fetch (
                    'https://geo.ipify.org/api/v2/country,city?apiKey=at_m25176uh13PLKuNsDz5iswx3XGnHG&ipAddress='
                )
                //converta a resposta retornada em json e atribua a constante data
                const data = await resposta.json()
                setApiReturn(data)
            }

            userLocation();
            console.log(apiReturn);

        } catch (error) {
            console.trace(error);
        }

    }, []);
    



    const submitExec = (e: { preventDefault: () => void }) =>{
        console.log(e);
        e.preventDefault();
    }

    //<!–- se apiReturn for verdadeiro '&&' o resto será executado. Linha 178 -->
    return (
        <div>

            <section className='content--ip--input'>
                <h1 className='title--ip--box'>IP Address Tracker</h1>

                <form onSubmit={submitExec}>
                    <input type="text" className='input--ip' placeholder='Search for any Ip address or domain' required />
                    <button type="submit">
                        <img src={arrow} alt="arrow" className='arrow' />
                    </button>
                    
                </form>
        
        {apiReturn && (
                <section className='api--value--return'>

                    <div className='ipp--box'>
                        <h2>IP ADDRESS</h2>
                        <p className='ip'>{apiReturn.ip}</p>
                    </div>

                    <div className='location--box'>
                        <h2>LOCATION</h2>
                        <p className='location'>{apiReturn.location.city}</p>
                    </div>

                    <div className='timezone--box'>
                        <h2>TIMEZONE</h2>
                        <p className="timezone">{apiReturn.location.timezone}</p>
                    </div>

                    <div className='isp--box'>
                        <h2>ISP</h2>
                        <p className="isp"></p>
                    </div>

                </section>
                    )}      
            </section>
            <section className='content--map'>

                <div id='map'>
                    <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Marker icon={icon} position={[latitude, longitude]}>
                            <Popup>This is the location of the IP Address or Domain</Popup>
                        </Marker>

                    </MapContainer>
                </div>
            </section>
  
        </div>
    );

}

export default PartePrincipal;

/* useEffect(() => {
    
    const position = [latitude, longitude]
    const map = useMap()
    
    console.log(position);
    map.flyTo (position as [number, number], 13, {
            animate:true
     })

     console.log('teste')



}, [latitude, longitude]);

*/