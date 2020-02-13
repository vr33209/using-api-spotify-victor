import React, { useState } from 'react';
import Header from '../../components/Header'
import Main from '../../components/Main'
import { Trackers } from '../../helpers/trackersContext';

export default function Home() {
  const [ trackers, setTrackers] = useState(Trackers)
  return (
    <Trackers.Provider value={{trackers, setTrackers}}>
      <Header/>
      <Main/>
    </Trackers.Provider>
  );
}
