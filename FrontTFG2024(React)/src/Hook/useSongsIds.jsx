import { useEffect, useState } from "react";
import { getSongId, getSongsYear, getSongsCountry } from "../Servicios/SongsServices";


export const useSongId = (id) => {
    const [Song, setSong] = useState({});
    const [search, setSearch] = useState(true);

    function GetSong(){
        setSearch(true);
        getSongId(id).then(song =>{
            setSong(song);
            setSearch(false);
        })
    }
    useEffect(GetSong, [id])
    return {search, Song}
}

export const useSongsYear = (year) => {

    const [Songslist, setSongslist] = useState([]);
    const [search, setSearch] = useState(true)

    function GetSongs() {
        setSearch(true);
        getSongsYear(year).then(song =>{
            setSongslist(song);
            setSearch(false);
        })
    }
    useEffect(GetSongs, [year])
    return {search, Songslist}
}

export const useSongsCountry = (country) => {
    const [Songslist, setSongslist] = useState([]);
    const [search, setSearch] = useState(true)

    function GetSongs() {
        setSearch(true);
        getSongsCountry(country).then(song =>{
            setSongslist(song);
            setSearch(false);
        })
    }
    useEffect(GetSongs, [country])
    return {search, Songslist}
}