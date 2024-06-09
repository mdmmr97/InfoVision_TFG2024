import { useEffect, useState } from "react";
import { getComments, getCommentId } from '../Servicios/CommentsService'

const useComments= () => {
    const [Commentslist, setCommentslist] = useState([]);
    const [search, setSearch] = useState(true);

    function GetComments(){
        setSearch(true);
 
        getComments().then(comment =>{
            setCommentslist(comment);
            setSearch(false);
        })
    }
    useEffect(GetComments, [])
    
    return {search, Commentslist}
}
export default useComments 

export const useCommentId = (id) => {
    const [Comment, setComment] = useState({});
    const [search, setSearch] = useState(true);
    const comment = {
        id: '',
        song_id: '',
        year: null,
        country: '',
        note_nfp: null,
        note_ofm: null,
        note_live: null,
        text: ''
    }

    function GetComment(){
        setSearch(true);
        getCommentId(id).then(r =>{
            r !== null 
            ? setComment(r)
            : setComment(comment);
            setSearch(false);
        })
    }
    useEffect(GetComment, [id])
    return {search, Comment}
}