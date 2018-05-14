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
          {/* <script
            src={`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(
              GOOGLE_API_KEY,
            )}&libraries=places`}
          /> */}
          {/* <script
            src={`https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchKeyword}`}
          /> */}

          <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0-beta/js/materialize.min.js" />
          <script src="/client.js" />
        </body>
      </html>
    );
  }
}

export default MainPage;
