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
    console.log(lyricList)

    return (
        <>
            <div className={classes.Container}>
                {lyricList.lyrics.map(lyric => {
                    return (
                        <div key={lyric.track.track_id} className={classes.Item}>
                            <h2 style={{fontSize:'18px', fontWeight:'300'}}>Track Name: <strong>{lyric.track.track_name}</strong></h2>
                            <h4 style={{fontSize:'18px', fontWeight:'300'}}>Album Name: <strong>{lyric.track.album_name}</strong></h4>
                            <h5 style={{fontSize:'18px', fontWeight:'300'}}>Artist: <strong>{lyric.track.artist_name}</strong></h5>
                            <Link to={'/lyrics/' + lyric.track.track_id}><button className={classes.Button}>View Lyrics<FontAwesomeIcon icon='arrow-right' style={{paddingLeft:'20px'}}/></button></Link>
                        </div>
                    )
                })}
            </div>
            <Route path={props.match.url + '/lyrics/:id'} component={LyricDetail}/>
        </>
    )
};



export default withRouter(LyricList);
