import './main.css'
import arrow from '../../assets/styles/images/icon-arrow.svg'


const PartePrincipal = () => {

    return (
        <div>
            <section className='content--ip--input'>
                <h1 className='title--ip--box'>IP Address Tracker</h1>
                
                <label htmlFor="ip">
                    <input type="text" className='input--ip' placeholder='Search for any Ip address or domain' />
                    <img src={arrow} alt="arrow" className='arrow' />
                </label>
                
            </section>
            <section className='content--map'>
                
            </section>
        </div>
    );

}

export default PartePrincipal;
