import envirement  from '../appsettings/appsettings.jsx';

const apiURL_songs = envirement.apiURL + `songs`;

export async function getSongs (country, year, searchnamesong, ordenNameSong, ordenCountry, ordenYear, page, limit = 0) {
    
    const filters = [];
    if (country !== 'All') filters.push(`countryfilter=${country}`);
    if (year !== 'All') filters.push(`yearfilter=${parseInt(year)}`);
    if (searchnamesong !== '') filters.push(`searchnamesong=${searchnamesong}`);
    if (ordenNameSong !== 'All') filters.push(`ordennamesong=${parseInt(ordenNameSong)}`);
    if (ordenCountry !== 'All') filters.push(`ordencountry=${parseInt(ordenCountry)}`);
    if (ordenYear !== 'All') filters.push(`ordenyear=${parseInt(ordenYear)}`);
    if (limit !== 0){ 
        filters.push(`page=${parseInt(page)}`);
        filters.push(`offset=${limit*page}`);
    }

    let url_songcards = '';

    if (filters.length === 0)  url_songcards = apiURL_songs  + '/card';
    else url_songcards = apiURL_songs  + '/card/filter?' + filters.join('&');

    return await fetch(url_songcards).then(response => {
        const data = response.json();
        return data;
    });
}

export async function getSongId (id) {
    return await fetch(apiURL_songs + `/${id}`).then(response => {
        const data = response.json();
        return data;
    });
}

export async function getSongsYear (year) {
    return await fetch(apiURL_songs + `/card/filter?yearfilter=${parseInt(year)}`).then(response => {
        const data = response.json();
        return data;
    });
}

export async function getSongsCountry (country) {
    return await fetch(apiURL_songs + `/card/filter?countryfilter=${country}`).then(response => {
        const data = response.json();
        return data;
    });
}


