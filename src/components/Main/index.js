import React, { useEffect, useState, useContext, useCallback } from 'react';
import { getTrackers, authorizationApi } from '../../helpers/callToApi';
import { Trackers } from '../../helpers/trackersContext';

export default function Main() {
  const [token] = useState(window.localStorage.getItem('token') || window.location.hash.substr(14))
  const { trackers, setTrackers } = useContext(Trackers);

  useState(() => {
    window.location.hash = "";
    token ? window.localStorage.setItem('token', token) : authorizationApi()
  }, [])

  useEffect(()=> {
    getTrackers(setTrackers)
  },[setTrackers])

  return (
    <main className="main">
      <div className="container">
        <h1>Minha PlayList</h1>
        {trackers.items && trackers.items.map(item =>(
          <div className="cardMusic">
            <img src={item.track.album.images[0].url} alt=""/>
            <div className="infoMusic">
              <label>
                Artista: <span>{item.track.artists[0].name}</span>
              </label>
              <label>
                Musica: <span>{item.track.name}</span>
              </label>
              <audio controls>
                <source src={item.track.preview_url}/>
              </audio>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
