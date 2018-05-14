import React from 'react';
import Photo from './Photo';
import {fetchPhoto} from './actions/index';
import {connect} from 'react-redux';

const PhotoList = ({photos}) => (
  <div>
    <ul>
      {photos.map((photo, i) => <Photo key={photo.title + i} photo={photo} />)}
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
