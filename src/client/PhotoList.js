import React from 'react';

class PhotoList extends React.Component {
  constructor() {
    super();
    this.state = {mounted: false};
  }

  componentDidMount() {
    this.setState({mounted: true});
  }

  render() {
    var photos;
    if (this.state.mounted) {
      photos = this.props.data.map(function(photo) {
        if (photo) {
          let id = photo.id;
          let source = `https://farm${photo.farm}.staticflickr.com/${
            photo.server
          }/${photo.id}_${photo.secret}.jpg`;

          let title = `${photo.title}`;

          return (
            <a href={source} key={id} target="_blank" className="imageBox">
              <img src={source} alt={title} className="photoImage" />
            </a>
          );
        }
      });
    }

    return <div className="photoList">{photos}</div>;
  }
}

export default PhotoList;
