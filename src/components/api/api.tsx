
function apiIp () {

    const ip = document.querySelector('.input--ip') as HTMLInputElement;
    console.log(ip.value); 

    fetch('https://geo.ipify.org/api/v2/country?apiKey=YOUR_API_KEY&ipAddress=8.8.8.8').then((Response) =>{
        console.log(Response);
    })


} 

export default apiIp