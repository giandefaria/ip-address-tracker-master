import './main.css'
import arrow from '../../assets/styles/images/icon-arrow.svg'
import {
    MapContainer,
    TileLayer,
} from 'react-leaflet'

import { useEffect, useState } from 'react'
import Markerposition from '../api/Markerposition'

export let latitude: number;
export let longitude: number;


function PartePrincipal() {
   
 
    //para corrigir o erro de tipo 'never', ao adicionar os atributos no  html da página, tive que indicar que é um array de qualquer tipo.
    const [apiReturn, setApiReturn] = useState(null) as Array<any>;
    const [lat, setLat] = useState(null);

    //useEffect para carregar ao iniciar a página e sempre que tiver alguma alteração. captarei o ip do usuário
    useEffect(() => {
        //tente
        try {
            //função assíncrona para pegar o ip do usuário no primeiro carregamento da página
            const userLocation = async () => {
                //pegue o valor retornado pela api na const resposta, que será após aguardar o retorno da api 
                const resposta = await fetch (
                    'https://geo.ipify.org/api/v2/country,city?apiKey=at_m25176uh13PLKuNsDz5iswx3XGnHG&ipAddress='
                )
                //converta a resposta retornada em json e atribua a constante data
                const data = await resposta.json()
                setApiReturn(data)
                latitude = data.location.lat;  //adiciono o valor retornado em data nas variáveis latitude e longitude
                longitude = data.location.lng;
                console.log(latitude);
            }

            userLocation();
            console.log(apiReturn);

        } catch (error) {
            console.trace(error);
        }

    }, []);
    
   
    const newIpTracking = async () => {
       
        let ipOrDomain = document.querySelector('.input--ip') as HTMLInputElement;
        const resposta = await fetch(
            'https://geo.ipify.org/api/v2/country,city?apiKey=at_m25176uh13PLKuNsDz5iswx3XGnHG&ipAddress=' + ipOrDomain.value
        )
        const data = await resposta.json()
        setApiReturn(data);

        latitude = data.location.lat; //adiciono o valor retornado em data nas variáveis latitude e longitude
        longitude = data.location.lng;
        console.log(latitude);

        const reg = new RegExp('[A-Za-z]');
        console.log(reg.test(data.location.lat));

        //adicionei variavel latitude e longitude que irá atribuir o novo valor. 
        //Funcao markerposition usara o mapflyto de acordo com esses valores

    }

 

    const submitExec = (e: { preventDefault: () => void }) =>{
        console.log(e);
        e.preventDefault();
        newIpTracking();
    }

    //abaixo há o retorno do html da página, com a adição de valores variaveis capturados pelo função assíncrona e pelo useState
    //<!–- se apiReturn for verdadeiro '&&' o resto será executado. Linha 178 -->. 
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
                        <p className="isp">{apiReturn.isp}</p>
                    </div>

                </section>
                    )}      
            </section>
            <section className='content--map'>
            {apiReturn && (
                <div id='map'>
                    <MapContainer center={[apiReturn.location.lat, apiReturn.location.lng]} zoom={13} scrollWheelZoom={true}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <Markerposition />


                    </MapContainer>
                </div>
            )}    
            </section>
  
        </div>
        
    );

}

export default PartePrincipal;
