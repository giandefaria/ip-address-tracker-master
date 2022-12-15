import './main.css'
import arrow from '../../assets/styles/images/icon-arrow.svg'
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMap,
} from 'react-leaflet'

import apiIp from '../api/api'


const PartePrincipal = () => {

    return (
        <div>

            <section className='content--ip--input'>
                <h1 className='title--ip--box'>IP Address Tracker</h1>
                
                <label htmlFor="ip">
                    <input type="text" className='input--ip' placeholder='Search for any Ip address or domain' />
                    <img src={arrow} alt="arrow" className='arrow' onClick={apiIp}/>
                </label>
                
                <section className='api--value--return'>

                    <div className='ipp--box'>
                        <h2>IP ADDRESS</h2>
                        <p className='ip'></p>
                    </div>

                    <div className='location--box'>
                        <h2>LOCATION</h2>
                        <p className='location'></p>
                    </div>

                    <div className='timezone--box'>
                        <h2>TIMEZONE</h2>
                        <p className="timezone--box"></p>
                    </div>

                    <div className='isp--box'>
                        <h2>ISP</h2>
                        <p className="isp"></p>
                    </div>

                </section>
            </section>
            <section className='content--map'>
  
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
            </section>
        </div>
    );

}

export default PartePrincipal;
