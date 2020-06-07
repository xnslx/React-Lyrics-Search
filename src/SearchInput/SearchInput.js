import React, {useState, useEffect, useRef} from 'react';
import {Link, Route, withRouter} from 'react-router-dom';
import classes from './SearchInput.module.css';
import SearchedLyricsDetail from '../SearchedLyricsDetail/SearchedLyricsDetail';
import axios from 'axios';

const SearchInput = (props) => {
    // console.log(props)
    const [query, setQuery] = useState({});
    const inputRef = useRef();
    const [error, setError] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => {
          if (query === inputRef.current.value) {
            axios
              .get(
                `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${query}&apikey=2fb0796550ae4d881460ef2cbd2f61bc`
              )
              .then(res => {
                console.log(res);
                setQuery(res.data.message.body.lyrics);
              })
              .catch(error => {
                console.log(error)
                setError(true)
              });
          }
        }, 1000);
        return () => {
          clearTimeout(timer);
        };
      }, [query]);

      // const fetchLyricsHandler = (id) => {
      //     props.history.push('/songs/' + id)
      //     console.log(id)
      // }
    return (
        <>
            <form className={classes.Form}>
                <input
                    className={classes.Input}
                    ref={inputRef}
                    type='text' 
                    placeholder='song title...'
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Link to={{
                  pathname: '/songs/' + query.lyrics_id,
                  lyrics:query.lyrics_body
                }}><button className={classes.Button}>Get Track Lyrics</button></Link>
                {/* <button onClick={() => fetchLyricsHandler(query.lyrics_id)}>Get Track Lyrics</button> */}
            </form>
            <Route path={props.match.url + '/songs/:query.lyrics_id'} exact component={SearchedLyricsDetail} />
        </>
    )
};

export default withRouter(SearchInput);
