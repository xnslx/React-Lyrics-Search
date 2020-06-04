import React, {useContext} from 'react';
import {LyricContext} from '../Context/Context';
import classes from './LyricList.module.css';
// import axios from 'axios';
import {Link, Route, withRouter} from 'react-router-dom';
import LyricDetail from '../LyricDetail/LyricDetail';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LyricList = (props) => {
    // console.log(props)
    const lyricList = useContext(LyricContext)
    // console.log(lyricList)

    return (
        <>
            <div className={classes.Container}>
                {lyricList.lyrics.map(lyric => {
                    return (
                        <div key={lyric.track.track_id} className={classes.Item}>
                            <h2>{lyric.track.track_name}</h2>
                            <h4>{lyric.track.album_name}</h4>
                            <h5>{lyric.track.artist_name}</h5>
                            <Link to={'/' + lyric.track.track_id}><button>View Lyrics<FontAwesomeIcon icon='arrow-right' style={{paddingLeft:'20px'}}/></button></Link>
                        </div>
                    )
                })}
            </div>
            <Route path={props.match.url + '/:id'} component={LyricDetail}/>
        </>
    )
};



export default withRouter(LyricList);
