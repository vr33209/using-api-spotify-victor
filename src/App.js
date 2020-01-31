import React from 'react';
import api from './services/api'
function App() {
const client_id = "c3d950a187a44de2a2082639b7b245ff"
  function sign(){

    fetch('https://accounts.spotify.com/authorize')
    .then(res => {
        console.log(res)
        var scopes = 'user-read-private user-read-email';
        res.redirect('https://accounts.spotify.com/authorize' +
          '?response_type=code' +
          '&client_id=' + client_id +
          (scopes ? '&scope=' + encodeURIComponent(scopes) : '') +
          '&redirect_uri=' + encodeURIComponent('http://localhost:3000/'));
    })
    // api.get(`/authorize?client_id=${client_id}&response_type=code&redirect_uri=http://localhost:3000/`)
    //   .then(function (response) {
    //       console.log(response);
    //   })
    //   .catch(function(error) {
    //       console.log(error);
    //   })
  }
  return (
    <div className="App">
      <h1>Hello Spotify</h1>
      <button onClick={() => sign()}>Entrar na aplicacao</button>
    </div>
  );
}

export default App;
