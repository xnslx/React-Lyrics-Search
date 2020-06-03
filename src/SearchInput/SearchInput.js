import React, {useState, useEffect} from 'react';
import axios from 'axios';

const SearchInput = () => {
    
    const [query, setQuery] = useState('');

    useEffect(() => {
        axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/matcher.lyrics.get?q_track=${query}&apikey=2fb0796550ae4d881460ef2cbd2f61bc`)
            .then(res => {
                console.log(res)
            })
    })
    return (
        <form>
            <input 
                type='text' 
                placeholder='song title...'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button>Get Track Lyrics</button>
        </form>
    )
};

export default SearchInput;
