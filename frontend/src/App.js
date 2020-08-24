import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MenuDataProvider from './DataProvider';
import MenuDisplay from './DataDisplay';

class App extends Component {
  render() {
    return (
      <div>
        <MenuDataProvider endpoint='api/menu/' render={data => <MenuDisplay data={data} />} />
      </div>
    );
  }
}

export default App;
