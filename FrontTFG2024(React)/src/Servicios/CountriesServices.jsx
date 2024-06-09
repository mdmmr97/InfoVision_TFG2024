
import envirement  from '../appsettings/appsettings.jsx';

const apiURL_countries = envirement.apiURL + `countries`;

export async function getCountries () {

    const url_countrycards = apiURL_countries  + `/card`;

    return await fetch(url_countrycards).then(response => {
        const data = response.json();
        return data;
    });
}

export async function getCountryId (id) {
    return await fetch(apiURL_countries + `/${id}`).then(response => {
        const data = response.json();
        return data;
    });
}