import React from 'react';
import { Map } from './components/Map'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>

      <main>
      <Map lat={-33.911321} lng={18.417066} zoom={17}></Map>
      </main>
    </div>
  );
}

export default App;
