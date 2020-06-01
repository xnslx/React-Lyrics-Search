import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const LyricContext = React.createContext();

export const LyricContextProvider = (props) => {
    const [lyrics, setLyrics] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const fetchLyrics = async() => {
            setLoading(true);
            const res = await axios.get('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=2fb0796550ae4d881460ef2cbd2f61bc&chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1')
            // console.log(res)
            setLyrics(res.data.message.body.track_list);
            setLoading(false);
        }
        fetchLyrics()
    }, [])

    // console.log(lyrics)
    return (
        <LyricContext.Provider value={{lyrics, loading}}>
            {props.children}
        </LyricContext.Provider>
    )
}
