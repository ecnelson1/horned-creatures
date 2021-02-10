import React from 'react';
import images from './data.js'
export default class ImageItem extends React.Component {
    render(){return (
        images.map(image => 
                <div className="image-item">
                    <p className="image">Title: {image.title}</p> 
                    <img src={image.url} alt={image.description}/>
                    <p className="horn-count">Horn Count: {image.horns}</p>
                </div>)
    )}}