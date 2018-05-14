// @flow

import Footer from './Footer';
import Header from './Header';
import PhotoSearch from './PhotoSearch';
import React from 'react';
import {Provider} from 'react-redux';
import Store from './Store';

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={Store}>
        <div className="app">
          <Header />
          <PhotoSearch />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
