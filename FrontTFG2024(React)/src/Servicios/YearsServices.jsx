
import envirement  from '../appsettings/appsettings.jsx';

const apiURL_years = envirement.apiURL + `years`;

export async function getYears () {
    
    const url_yearcards = apiURL_years  + `/card`;

    return await fetch(url_yearcards).then(response => {
        const data = response.json();
        return data;
    });
}

export async function getYearId (id) {
    return await fetch(apiURL_years + `/${id}`).then(response => {
        const data = response.json();
        return data;
    });
}