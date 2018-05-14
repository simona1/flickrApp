import React from 'react';

const Photo = props => {
  return (
    <div className="card">
      <div className="card-block">
        <h6 className="card-title">{props.photo.title}</h6>
      </div>
      <img
        className="card-img-bottom card-img"
        src={props.photo.media.m}
        alt="{props.photo.title}"
      />
    </div>
  );
};

export default Photo;
