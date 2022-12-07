import React from 'react';

import Home from './components/home/Home';

function Application() {
  return (
    <div className="App">
        <Home posts={['First', 'Second']} title="talkera"/>
    </div>
  );
}

export default Application;
