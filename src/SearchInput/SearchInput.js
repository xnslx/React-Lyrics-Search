import React, {useState, useEffect, useRef} from 'react';
import {Link, Route, withRouter} from 'react-router-dom';
import SearchedLyricsDetail from '../SearchedLyricsDetail/SearchedLyricsDetail';
import axios from 'axios';

const SearchInput = (props) => {
    // console.log(props)
    const [query, setQuery] = useState({});
    const inputRef = useRef()

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
            <form>
                <input
                    ref={inputRef}
                    type='text' 
                    placeholder='song title...'
                    onChange={(e) => setQuery(e.target.value)}
                />
                <Link to={{
                  pathname: '/songs/' + query.lyrics_id,
                  lyrics:query.lyrics_body
                }}><button>Get Track Lyrics</button></Link>
                {/* <button onClick={() => fetchLyricsHandler(query.lyrics_id)}>Get Track Lyrics</button> */}
            </form>
            <Route path={props.match.url + '/songs/:query.lyrics_id'} exact component={SearchedLyricsDetail} />
        </>
    )
};

export default withRouter(SearchInput);
