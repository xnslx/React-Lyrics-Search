import React from 'react';

import classes from './LyricList.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LyricList = (props) => {
    console.log(props)
    return (
        <div className={classes.Container}>
            {props.lyrics.map(lyric => {
                return (
                    <div key={lyric.track.track_id} className={classes.Item}>
                        <h2>{lyric.track.track_name}</h2>
                        <h4>{lyric.track.album_name}</h4>
                        <h5>{lyric.track.artist_name}</h5>
                        <button>View Lyrics<FontAwesomeIcon icon='arrow-right' style={{paddingLeft:'20px'}}/></button>
                    </div>
                )
            })}
        </div>
    )
};



export default LyricList;
