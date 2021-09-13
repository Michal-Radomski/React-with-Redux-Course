import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  // console.log(props.images);
  // const images = props.images.map((image) => {
  //   return <img alt={image.description} key={image.id} src={image.urls.regular} />;
  // });

  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });
  return <div className="imagesList">{images}</div>;
};

export default ImageList;
