import React, { Component } from 'react';
import { Provider, connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import './styles/App.scss';
import properties$ from './services/mock';
import * as actions from './actions/actions'
import { store } from './config/store';

import TableContainer from './containers/TableContainer';
import SearchContainer from './containers/SearchContainer';

class App extends Component {

  componentDidMount() {
    properties$.subscribe((data) => {
      // console.log('data', data);
    })
  }

  render() {
    return (
      <Provider store={store}>
        <SearchContainer />
        <TableContainer />
      </Provider>
    );
  }
}

// const mapStateToProps = state => {
//   console.log(state);
//   return state;
// };

// const mapDispatchToProps = dispatch => ({
//   ...bindActionCreators(actions, dispatch),
// });

export default App;
