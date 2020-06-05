import React from 'react';
import {Link} from 'react-router-dom';
import classes from './SearchedLyricsDetail.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SearchedLyricsDetail = (props) => {
    console.log(props)
    return (
        <>
            <Link to='/lyrics'><FontAwesomeIcon icon='arrow-left' className={classes.Icon}/></Link>
            <div className={classes.Container}>
                <p>{props.history.location.lyrics}</p>
            </div>
        </>
    )
};

export default SearchedLyricsDetail;
