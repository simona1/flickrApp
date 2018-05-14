// @flow

import Footer from './Footer';
import Header from './Header';
import PhotoSearch from './PhotoSearch';
import {Provider} from 'react-redux';
import React from 'react';
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
