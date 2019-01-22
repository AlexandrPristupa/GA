import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { store } from './config/store';

import TableContainer from './containers/TableContainer';
import SearchContainer from './containers/SearchContainer';

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <SearchContainer />
        <TableContainer />
      </Provider>
    );
  }
}

export default App;
