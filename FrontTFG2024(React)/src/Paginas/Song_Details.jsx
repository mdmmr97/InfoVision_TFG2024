import Detalles_Song from '../Componentes/Detalles_Song/Detalles_Song';
import VideosPuntuar from '../Componentes/VideosPuntuar/VideosPuntuar';
import ScrollUp from '../Componentes/ScrollUp/ScrollUp';
import AjaxLoader from '../Componentes/Ajax-Loader/Ajax-Loader';
import React, { Suspense } from 'react';

import { useSongId } from '../Hook/useSongsIds';

const Song_Details = (props) => {    
    const id = props.params.song;
    const { search, Song } = useSongId(id)

    return (
        <div>
            <div className="parallax song" style={{ backgroundImage: `url(https://img.youtube.com/vi/${Song.candidature?.img_disc}/0.jpg`}} >
                {search
                ? <AjaxLoader />
                :<div className='titulo'>
                    <h1>
                        <span>{Song.candidature.song_title}</span><br />
                        {`#${Song.year} ${Song.country?.country_name}`}
                    </h1>
                 </div>
                }
            </div>
            <div className="deslizante">
                <Detalles_Song song={Song}/>
                <Suspense>
                    <VideosPuntuar song={Song}/>
                    <ScrollUp />
                </Suspense>
            </div>
        </div>
    )
}
export default Song_Details;