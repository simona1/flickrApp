import React from 'react';

const Photo = props => {
  let fullTitle = (props.photo.title).split(' ');

  let displayTitle = (fullTitle.length > 3) ?
    fullTitle.slice(0, 3).join(' ') :
    fullTitle;
  return (
    <div className="photo frame">
      <span>
        <img
          className="img"
          src={props.photo.media.m}
          alt="{props.photo.title}"
        />
      </span>
      <span className="space">{displayTitle}</span>
    </div>
  );
};

export default Photo;
