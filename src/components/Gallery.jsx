import React from "react";

// stores all screenshots user has taken
const Gallery = ({allScreenshots}) => {
    return (
        <div>
            {/* if allScreenshots has a value, for each image, make a div */}
            {allScreenshots && allScreenshots.map((image, index) => 
            <div key={index}>
                <img src={image} alt="Undefined screenshot" width='500' />
            </div>)}
        </div>
    )
}

export default Gallery;