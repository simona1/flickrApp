import React from 'react';

class MainPage extends React.Component {
  render() {
    return (
      <html>
        <head>
          <title>Flickr React</title>

          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/css/materialize.min.css"
          />

          <meta
            httpEquiv="Content-Security-Policy"
            content="upgrade-insecure-requests"
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="stylesheet" type="text/css" href="/style.css" />
          <link
            href="https://fonts.googleapis.com/css?family=Courgette"
            rel="stylesheet"
          />
        </head>

        <body>
          <div id="app">Loading...</div>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js" />
          <script src="/out.js" />
        </body>
      </html>
    );
  }
}

export default MainPage;
