import React, {useEffect, useState} from 'react';
import axios from 'axios';

const LyricDetail = (props) => {
    console.log(props)

    const trackId = props.match.params.id;
    const [lyricDetail, setLyricDetail] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const fetchLyricDetail = async() => {
            setLoading(true)
            const res = await axios.get(`https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${trackId}&apikey=2fb0796550ae4d881460ef2cbd2f61bc`)
            setLyricDetail({lyricDetail: res.data.message.body.lyrics})
            setLoading(false)
        }
        fetchLyricDetail()
    }, [trackId])

    return (
        <div>
            
        </div>
    )
};

export default LyricDetail;
