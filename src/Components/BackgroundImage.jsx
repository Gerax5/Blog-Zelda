import React from "react";
import './BackgroundImage.css'

const BackgroundImage = ({imageUrl, children}) =>{

    const backgroundImageStyle = {
        backgroundImage: `url(${imageUrl})`,
        backdropFilter: "blur(5px)"
    };

    return (
        <div style={backgroundImageStyle} className="backgroundimage">
                {children}
        </div>
    )
}

export default BackgroundImage