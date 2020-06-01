import React, {useContext} from 'react';
import {LyricContext} from '../Context/Context';
import classes from './LyricList.module.css';
// import axios from 'axios';
import {Link, Route, withRouter} from 'react-router-dom';
import LyricDetail from '../LyricDetail/LyricDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LyricList = (props) => {
    console.log(props)
    const lyricList = useContext(LyricContext)
    // console.log(lyricList)
    
    const fetchLyricsHandler = (trackId) => {
        console.log(trackId)
        // axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/apikey=2fb0796550ae4d881460ef2cbd2f61bc&track.lyrics.get?track_id=${trackId}`)
        //     .then(response => {
        //         console.log(response)
        //     })
    }

    return (
        <>
            <div className={classes.Container}>
                {lyricList.lyrics.map(lyric => {
                    return (
                        <div key={lyric.track.track_id} className={classes.Item}>
                            <h2>{lyric.track.track_name}</h2>
                            <h4>{lyric.track.album_name}</h4>
                            <h5>{lyric.track.artist_name}</h5>
                            <Link to={'/' + lyric.track.track_id}><button onClick={() =>fetchLyricsHandler(lyric.track.track_id)}>View Lyrics<FontAwesomeIcon icon='arrow-right' style={{paddingLeft:'20px'}}/></button></Link>
                        </div>
                    )
                })}
            </div>
            <Route path={props.match.url + '/:id'} exact component={LyricDetail}/>
        </>
    )
};



export default withRouter(LyricList);
