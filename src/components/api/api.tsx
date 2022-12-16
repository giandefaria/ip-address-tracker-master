
    let latitude: number;
    let longitude: number;

function apiIp () {

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
            console.log (isp);

            const ipHtmlElement = document.querySelector('.ip') as HTMLElement;
            const locationHtmlElement = document.querySelector('.location') as HTMLElement;
            const timezoneHtmlElement = document.querySelector('.timezone') as HTMLElement;
            const ispHtmlElement = document.querySelector('.isp') as HTMLElement;

            ipHtmlElement.innerHTML = ip;
            locationHtmlElement.innerHTML = location;
            timezoneHtmlElement.innerHTML = timezone;
            ispHtmlElement.innerHTML = isp;

        })

    })
} 

export const lat = () => {
    return latitude;
}

export const lng = () => {
    return longitude;
}

export default apiIp



