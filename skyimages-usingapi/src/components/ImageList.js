import React from "react";

const ImageList = ({items}) => {

 
    const renderedList = items.map(item => {

        return (
            <div className="imageDisplay" key={item.id}>
                <img alt={item.title} src={item.thumb} />
            </div>
        );
    });

    return (
        <div className="image-container">{renderedList}</div>
    )
}

export default ImageList;