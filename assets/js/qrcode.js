import getToken from './module/unsplash.js';
import weatherApi from  "./module/openweather.js";
import geoApi from "./module/geolocation.js";

(async () => {

    const results = await Promise.allSettled([geoApi(), getToken()]);
    console.dir(results);
    const [{value: coords},{value: token}]= results;
    const {
        main: {temp},
        weather: [{main:info}]
    } = await weatherApi(coords);

    const weather = document.querySelector('#weather');
    const body = document.querySelector('body');
    const locationName = document.querySelector('#locationName');
    weather.textContent = `${info}@${temp} 도`;
    body.style.backgroundImage=`url(${token.bg})`;
    locationName.textContent = token.location;
})();
