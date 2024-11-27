import React from 'react';

const CatGallery = ({ images }) => (
    <div className="gallery">
        {images.map((image, index) => (
            <img key={index} src={image.url} alt="cat" style={{ width: '200px', height: '200px', objectFit: 'cover' }} />
        ))}
    </div>
);

export default CatGallery;