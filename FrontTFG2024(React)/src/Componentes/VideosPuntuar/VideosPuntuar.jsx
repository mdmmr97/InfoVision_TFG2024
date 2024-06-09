import './VideosPuntuar.css';
import { Container, Row, Button, Form } from 'react-bootstrap';

import { postComment, putComment } from '../../Servicios/CommentsService';
import { useCommentId } from '../../Hook/useComments';
import useUsersLogin from '../../Hook/useUsers';

const VideosPuntuar = (props) => {

    const id_song = props.song.id_song;
    const { search, Comment } = useCommentId(id_song) || null;
    const LoginIn = useUsersLogin();

    const GuardarDatos = async (e) => {
        e.preventDefault();

        const commentdata = {
            id: Comment?.id || '',
            song_id: props.song.id_song,
            song_name: props.song?.candidature?.song_title,
            year: props.song.year,
            country: props.song?.country?.country_name,
            note_nfp: e.target.nota_nfp?.value || null,
            note_ofm: e.target.nota_ofm?.value || null,
            note_live: e.target.nota_live?.value || null,
            text: e.target.comment_text?.value || ''
        }

        const respuesta = Comment.id === ''
            ? await postComment(commentdata)
            : await putComment(commentdata, Comment.id);

        if (respuesta === 204) {
            alert('Tu respuesta se ha guardado correctamente');
        } else {
            alert('Error al guardar los datos');
        }
    }

    return (
        <Row>
            {LoginIn === true ?
                <Container className="containervp">
                    <Row className='justify-content-center'>
                        <h3> Puntuar Cancion </h3>
                        <Form onSubmit={GuardarDatos} className=''>
                            {props.song?.youtube_nfp === '' ? null :
                                <Form.Group controlId="nota_nfp">
                                    <Row>
                                        <Form.Label xs={6}>Puntuacion Final Nacional</Form.Label>
                                        <Form.Control xs={6} type="number" placeholder="Puntuacion Final Nacional" max={10} min={0}
                                            defaultValue={search ? null : Comment?.note_nfp || null} />
                                    </Row>
                                </Form.Group>
                            }
                            {props.song?.youtube_ofm === '' ? null :
                                <Form.Group controlId="nota_ofm">
                                    <Row>
                                        <Form.Label>Puntuacion Video Oficial</Form.Label>
                                        <Form.Control type="number" placeholder="Puntuacion Video Oficial" max={10} min={0}
                                            defaultValue={search ? null : Comment?.note_ofm || null} />
                                    </Row>
                                </Form.Group>
                            }
                            {props.song?.youtube_live === '' ? null :
                                <Form.Group controlId="nota_live">
                                    <Row>
                                        <Form.Label>Puntuacion Actuacion Eurovision</Form.Label>
                                        <Form.Control type="number" placeholder="Puntuacion Actuacion Eurovision" max={10} min={0}
                                            defaultValue={search ? null : Comment?.note_live || null} />
                                    </Row>
                                </Form.Group>
                            }
                            <Form.Group controlId="comment_text">
                                <Row>
                                    <Form.Label>Comentario</Form.Label>
                                    <Form.Control type="text" placeholder="Comentario" defaultValue={search ? '' : Comment.text || ''} />
                                </Row>
                            </Form.Group>
                            <Button variant="primary" type="submit"> Enviar </Button>
                        </Form>
                    </Row>
                </Container>
            : null}
        </Row>
    )
}
export default VideosPuntuar;