// @flow

import React from 'react';
import {Provider} from 'react-redux';
import Store from './Store';

type Props = {};

class App extends React.Component<Props> {
  render() {
    return (
      <Provider store={Store}>
        <div>
          <h1>React with Flickr</h1>
        </div>
      </Provider>
    );
  }
}

export default App;
