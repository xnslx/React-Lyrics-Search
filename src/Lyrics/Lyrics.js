import React, {useState, useEffect} from 'react';
import LyricList from '../LyricList/LyricList';
import axios from 'axios';

const Lyrics = () => {
    const [lyrics, setLyrics] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchLyrics = async() => {
            setLoading(true);
            const res = await axios.get('https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=2fb0796550ae4d881460ef2cbd2f61bc&chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1')
            console.log(res)
            setLyrics(res.data.message.body.track_list);
            setLoading(false);
        }
        fetchLyrics()
    }, [])

    console.log(lyrics)


    return (
            <LyricList lyrics={lyrics}/>
    )
};


export default Lyrics;
