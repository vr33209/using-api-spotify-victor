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
    <>
     <Header token={token}/>
     {/* <SideBard/> */}
     <Main/>
    </>
  );
}

export default App;
