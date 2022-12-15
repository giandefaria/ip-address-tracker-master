

function apiIp () {

    let ip = document.querySelector('.input--ip') as HTMLInputElement;
    let location;
    let timezone;
    let isp;
    console.log(ip.value); 

    fetch('https://geo.ipify.org/api/v2/country,city?apiKey=at_m25176uh13PLKuNsDz5iswx3XGnHG&ipAddress=8.8.8.8').then((Response) =>{
        
        Response.json().then((data) => {
            console.log(data);
            location = data.location.city + ' , ' + data.location.region + " " + data.location.postalCode;
            console.log(location);
        })

    })


} 

export default apiIp