import React from 'react';
import PhotoList from './PhotoList';
import SearchBox from './SearchBox';

const PhotoSearch = () => {
  return (
    <div>
      <SearchBox />
      <PhotoList />
    </div>
  );
};

export default PhotoSearch;
