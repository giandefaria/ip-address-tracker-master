import './main.css'


const PartePrincipal = () => {

    return (
        <div>
            <section className='content--ip--input'>
                <h1 className='title--ip--box'>IP Address Tracker</h1>
                
                <label htmlFor="ip">
                    <input type="text" className='input--ip' placeholder='Search for any Ip address or domain' />
                </label>
                
            </section>
            <section className='content--map'>
                
            </section>
        </div>
    );

}

export default PartePrincipal;
