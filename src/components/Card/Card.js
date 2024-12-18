import React from "react";
import { Link } from "react-router-dom";
import "../Card/card.css";

const Card = ({ image, title, description, link, width, height }) => {
  return (
    <Link to={link} className="card-link">
      <div className="card">
        {/* Gambar */}
        <img
          src={image}
          alt={title}
          className="card-image"
          style={{
            width: width || "100%", // Gunakan width dari props atau default 100%
            height: height || "auto", // Gunakan height dari props atau default auto
            objectFit: "cover", // Menjaga gambar tetap proporsional
          }}
        />

        {/* Konten */}
        <div className="card-content">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
