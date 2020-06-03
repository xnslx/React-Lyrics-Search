import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import classes from './LyricDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LyricDetail = (props) => {
    // console.log(props)

    const trackId = props.match.params.id;
    const [lyricDetail, setLyricDetail] = useState({});


    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=2fb0796550ae4d881460ef2cbd2f61bc`)
            .then(res => {
                setLyricDetail(res.data.message.body.lyrics)
            })
            .catch(error => console.log(error))
    }, [trackId])
    
    
    // console.log(lyricDetail)

    return (
        <>
            <Link to='/'><FontAwesomeIcon icon='arrow-left' className={classes.Icon}/></Link>
            <div className={classes.Container}>
                <p>{lyricDetail.lyrics_body}</p>
            </div>
        </>
    )
};

export default LyricDetail;
