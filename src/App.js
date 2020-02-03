import React, { useState} from 'react';
import Header from './components/Header'
import SideBard from './components/Sidebar'
import Main from './components/Main'
import { authorizationApi } from './helpers/callToApi'
function App() {
  const [token] = useState(window.localStorage.getItem('token') || window.location.hash.substr(14))

  useState(() => {
    window.location.hash = "";
    token ? window.localStorage.setItem('token', token) : authorizationApi()
  }, [])

  return (
    <div className="app">
     <Header token={token}/>
     <SideBard/>
     <Main/>
    </div>
  );
}

export default App;
