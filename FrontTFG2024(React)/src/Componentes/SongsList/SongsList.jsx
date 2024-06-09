import useSongs from '../../Hook/useSongs'
import InfiniteScroll from 'react-infinite-scroll-component';
import AjaxLoader from '../Ajax-Loader/Ajax-Loader'
import Tarjeta from '../Tarjeta/Tarjeta'

const SongsList = (props) => {
    
    const allSongs =  location.pathname === '/songs';  

    const { search, Songslist, setPage } = allSongs ? useSongs() : props.hook;

    function fetchMoreData() {
        setPage(preview => preview + 1);
    }

    function MostrarSong(song){

        return  <Tarjeta key={song.id_song}
                         id={song.id_song}
                         image={song.img_disc}
                         title={song.song_title}
                         performer={song.performer}
                         country={song.country.country_name}
                         year={song.year}
                         type='songs'
                         
                />
    }
    return ( 
        <>    
        <div className='listasong'>
            {props.titulo ? <h3 className='display-2'>{`${props.titulo}`}</h3> : null}
        </div>
        <div className='row alturaLista'>
            {search 
            ? <AjaxLoader /> 
            : Songslist.map(song => MostrarSong(song)) || <h2>No hay canciones</h2>
            }
        </div>
        </>
    )
};
export default SongsList

/*
            <InfiniteScroll dataLength={Songslist.length} next={fetchMoreData} hasMore={true} loader={<AjaxLoader/>}>
            {
                Songslist.map(song => MostrarSong(song))
            }
            </InfiniteScroll>
*/
