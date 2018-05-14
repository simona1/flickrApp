import React from 'react';

const Photo = props => {
  const rawTitle = props.photo.title;

  let newTitle = rawTitle.substr(0, 30);
  newTitle = newTitle.substr(0, newTitle.lastIndexOf(' '));

  return (
    <div className="photo frame">
      <span>
        <img
          className="img"
          src={props.photo.media.m}
          alt="{props.photo.title}"
        />
      </span>
      <span className="space">{newTitle}</span>
    </div>
  );
};

export default Photo;
