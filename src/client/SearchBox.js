import React from 'react';

class SearchBox extends React.Component {
  handleSubmit = event => {
    event.preventDefault();
    let apiKey = 'b382d1bb8509e51798bebde61aff5324';
    let searchKeyword = this.refs.photoKeyword.value;
    this.refs.photoKeyword.value = '';

    let url = `https://api.flickr.com/services/rest/?api_key=${apiKey}&method=flickr.photos.search&format=json&nojsoncallback=1&&per_page=50&page=1&text=${searchKeyword}`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        console.log(data.photos.photo);
        this.props._getPhotos(data.photos.photo);
      })
      .catch(error => {
        throw error;
      });
  };

  render() {
    return (
      <div className="">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            className="searchInput"
            placeholder="type keyword here"
            ref="photoKeyword"
            required
            autoFocus
          />
          <button type="submit" ref="button" className="searchButton">
            Search on Flickr
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBox;
