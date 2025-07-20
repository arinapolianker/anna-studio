import React from "react";
import "./App.css";
import photos from "./Photos";

export default function Gallery({ category }) {
  const images = photos[category] || [];

  return (
    <div className="gallery">
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt={`${category}-${index}`}
          className="gallery-image"
        />
      ))}
    </div>
  );
}