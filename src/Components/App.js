import React from 'react';
import Search from "./Search";
import Nav from "./Nav";
import Results from "./Results";
import Notfound from "./Notfound";

function App() {
  return (
      <div className="container">
        <Search />
        <Nav />
        <Results/>
      </div>
  );
}

export default App;
