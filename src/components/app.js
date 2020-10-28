import React, { useEffect } from 'react';
import Uptime from './uptime';

const App = () => {
  
  const { ApiKeys, SiteName } = window.Config;

  useEffect(() => {
    window.document.title = SiteName;
  }, [SiteName]);

  return (
    <>
        <div id="uptime">
          {ApiKeys.map(i => (
            <Uptime key={i} apikey={i} />
          ))}
        </div>
    </>
  );
}

export default App;
