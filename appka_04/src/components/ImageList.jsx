import React from "react";

const ImageList = (props) => {
  // console.log(props.images);
  // const images = props.images.map((image) => {
  //   return <img alt={image.description} key={image.id} src={image.urls.regular} />;
  // });
  // -Destructuring Assignment
  const images = props.images.map(({description, id, urls}) => {
    return <img width="600px" alt={description} key={id} src={urls.regular} />;
  });
  return <div>{images}</div>;
};

export default ImageList;
