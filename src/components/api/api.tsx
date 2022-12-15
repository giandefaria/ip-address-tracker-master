

function apiIp () {

    let ipOrDomain = document.querySelector('.input--ip') as HTMLInputElement;
    let ip;
    let location;
    let timezone;
    let isp;
    console.log(ipOrDomain.value); 

    fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_m25176uh13PLKuNsDz5iswx3XGnHG&ipAddress=8.8.8.8').then((Response) =>{
        
        Response.json().then((data) => {
            console.log(data);
            ip = data.ip;
            location = data.location.city + ', ' + data.location.region + " " + data.location.postalCode;
            timezone = data.location.timezone;
            isp = data.isp;
            console.log(ip);
            console.log(location);
            console.log(timezone);
            console.log (isp);

            const ipHtmlElement = document.querySelector('.ip') as HTMLElement;
            const locationHtmlElement = document.querySelector('.location') as HTMLElement;
            const timezoneHtmlElement = document.querySelector('.timezone--box') as HTMLElement;
            const ispHtmlElement = document.querySelector('.isp') as HTMLElement;

            

        })

    })


} 

export default apiIp