import './main.css'
import arrow from '../../assets/styles/images/icon-arrow.svg'
import {
    MapContainer,
    TileLayer,
} from 'react-leaflet'

import { useEffect, useState } from 'react'
import Markerposition from '../api/Markerposition'

//variáveis latitude e longitude serão exportadas para o markerposition poder ter acesso aos seus valores
export let latitude: number;
export let longitude: number;
//tive que retirar do useState a função de captar esses valores e adicionar no html. Dava bug na página a cada vez que ocorria um erro
//praticamente a página renderizava e os valores voltavam a ser nulos, o que impedia a correta
let ip: number;
let location: string;
let timezone: any;
let isp: string;


function PartePrincipal() {


    //para corrigir o erro de tipo 'never', ao adicionar os atributos no  html da página, tive que indicar que é um array de qualquer tipo.
    const [apiReturn, setApiReturn] = useState(null) as Array<any>;

    //useEffect para carregar ao iniciar a página e sempre que tiver alguma alteração. captarei o ip do usuário
    useEffect(() => {
        //tente
        try {
            //função assíncrona para pegar o ip do usuário no primeiro carregamento da página
            const userLocation = async () => {
                //pegue o valor retornado pela api na const resposta, que será após aguardar o retorno da api 
                const resposta = await fetch(
                    'https://geo.ipify.org/api/v2/country,city?apiKey=at_m25176uh13PLKuNsDz5iswx3XGnHG&ipAddress='
                )
                //converta a resposta retornada em json e atribua a constante data
                const data = await resposta.json()
                setApiReturn(data) //adiciono o json ao setApiReturn
                latitude = data.location.lat;  //adiciono o valor retornado em data nas variáveis latitude e longitude
                longitude = data.location.lng;
                ip = data.ip;
                location = data.location.city;
                timezone = data.location.timezone;
                isp = data.isp;

            }

            userLocation();

        } catch (error) {
            console.trace(error);
        }

    }, []);

    //fará uma nova requisição a API, mas agora a partir da informação adicionada no input da página. Também será uma função assíncrona
    const newIpTracking = async () => {

        //verificará a presença de letras na expressão regular. Servirá para descobrir se o valor é um ip ou um domínio
        const reg = new RegExp('[A-Za-z]');
        const exp = new RegExp('https://');

        let ipOrDomain = document.querySelector('.input--ip') as HTMLInputElement;
        console.log(reg.test(ipOrDomain.value)); //verifica se o valor indicado é true ou false
        console.log(ipOrDomain.value.replace(exp,""));
        //se o valor retornar falso, então executará a busca do endereço pelo ip
        if (reg.test(ipOrDomain.value) == false) {

            //verificará se o valor é valido, senão, será criado um alerta para inserir um ip válido
            try {
                const resposta = await fetch(
                    'https://geo.ipify.org/api/v2/country,city?apiKey=at_m25176uh13PLKuNsDz5iswx3XGnHG&' + 'ipAddress=' + ipOrDomain.value
                )
                const data = await resposta.json()
                setApiReturn(data);

                latitude = data.location.lat; //adiciono o valor retornado em data nas variáveis latitude e longitude
                longitude = data.location.lng;
                ip = data.ip;
                location = data.location.city;
                timezone = data.location.timezone;
                isp = data.isp;

            } catch {
                alert('Ip não localizado. Insira um Ip válido!');
            }

            //mas se o valor é verdadeiro, então é um domínio  
        } else if (reg.test(ipOrDomain.value) == true) {

            //verificará se o valor é valido, senão, será criado um alerta para inserir um domínio válido
            try {
                const resposta = await fetch(
                    'https://geo.ipify.org/api/v2/country,city?apiKey=at_m25176uh13PLKuNsDz5iswx3XGnHG&' + 'domain=' + ipOrDomain.value
                )
                const data = await resposta.json()
                setApiReturn(data);

                latitude = data.location.lat; //adiciono o valor retornado em data nas variáveis latitude e longitude
                longitude = data.location.lng;
                ip = data.ip;
                location = data.location.city;
                timezone = data.location.timezone;
                isp = data.isp;
            } catch {
                alert('Endereço não localizado. Insira um endereço válido!');
            }
        }
    }

    //funções que serão executadas ao preencher o form e clicar no botão submit. 
    const submitExec = (e: { preventDefault: () => void }) => {
        console.log(e);
        e.preventDefault(); //previne o recarregamento da página e executa a const newIpTracking;
        newIpTracking();
    }

    //abaixo há o retorno do html da página, com a adição de valores variaveis capturados pelo função assíncrona e pelo useState
    //<!–- se apiReturn for verdadeiro '&&' o resto será executado. Linha 135 e 162 -->. Tive que deixar essa funcionalidade para evitar bug da página em branco
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
                            <p className='ip'>{ip}</p>
                        </div>

                        <div className='location--box'>
                            <h2>LOCATION</h2>
                            <p className='location'>{location}</p>
                        </div>

                        <div className='timezone--box'>
                            <h2>TIMEZONE</h2>
                            <p className="timezone">{timezone}</p>
                        </div>

                        <div className='isp--box'>
                            <h2>ISP</h2>
                            <p className="isp">{isp}</p>
                        </div>

                    </section>
                )}
            </section>
            <section className='content--map'>
                {apiReturn && (
                    <div id='map'>
                        <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={true}>
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
