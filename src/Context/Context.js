import React, {useState, useEffect} from 'react';
import axios from 'axios';

export const LyricContext = React.createContext();

export const LyricContextProvider = (props) => {
    const [trackList, setTrackList] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        axios
          .get(
            "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/chart.tracks.get?apikey=e8e53f30df9f3fa244c091846fdc0fd5&chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1"
          )
          .then(res => {
            setTrackList(res.data.message.body.track_list);
            setLoading(false);
            // console.log("res", res);
          })
          .catch(error => {
            // console.log(error);
            setLoading(false);
          });
      }, []);
    
      return (
        <LyricContext.Provider value={{ trackList, loading, setTrackList }}>
          {props.children}
        </LyricContext.Provider>
      );
    };
