import React, {useState, useRef, useContext} from 'react';
import classes from './SearchInput.module.css';
import {LyricContext} from '../Context/Context';
import axios from 'axios';

const SearchInput = (props) => {
    // console.log(props)
    const [query, setQuery] = useState({});
    const inputRef = useRef();
    const [setError] = useState(false);
    const { setTrackList } = useContext(LyricContext);

    const fetchLyrics = e => {
      e.preventDefault();
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${query}&page_size=10&page=1&s_track_rating=desc&apikey=2fb0796550ae4d881460ef2cbd2f61bc`
        )
        .then(res => {
          console.log(res);
          setTrackList(res.data.message.body.track_list);
        })
        .catch(error => {
          console.log(error);
          setError(true);
        });
    };
    return (
      <>
        <form className={classes.Form} onSubmit={fetchLyrics}>
          <input
            className={classes.Input}
            ref={inputRef}
            type="text"
            placeholder="song title..."
            onChange={e => setQuery(e.target.value)}
          />
          <button className={classes.Button}>Get Track Lyrics</button>
        </form>
      </>
    );
  };
  
  export default SearchInput;