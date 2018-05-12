// @flow

import Footer from './Footer';
import Header from './Header';
import PhotoList from './PhotoList';
import SearchBox from './SearchBox';
import React from 'react';
import {Provider} from 'react-redux';
import Store from './Store';

type Props = {};

class App extends React.Component<Props> {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
    };
    this.hadleGetPhotos = this.handleGetPhotos.bind(this);
  }

  handleGetPhotos = photos => {
    let newPhotos = [...photos];
    this.setState({
      photos: newPhotos,
    });
  };

  render() {
    return (
      <Provider store={Store}>
        <div className="app">
          <Header />
          <SearchBox _getPhotos={this.handleGetPhotos} />
          <PhotoList data={this.state.photos} />
          <Footer />
        </div>
      </Provider>
    );
  }
}

export default App;
