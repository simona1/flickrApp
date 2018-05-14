import React from 'react';
import Photo from './Photo';
import {fetchPhoto, FETCH_PHOTO_DATA} from './actions/index';
import {connect} from 'react-redux';

const PhotoList = ({photos}) => (
  <div>
    <ul>
      {photos.map(photo => (
        <Photo key={photo.date_taken + photo.title} photo={photo} />
      ))}
    </ul>
  </div>
);

const mapStateToProps = state => {
  return {
    photos: state.photos,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchPhoto: keyword => dispatch(fetchPhoto(keyword)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoList);
