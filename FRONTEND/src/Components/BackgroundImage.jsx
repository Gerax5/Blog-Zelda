import './BackgroundImage.css'
import PropTypes from 'prop-types';


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

BackgroundImage.propTypes = {
    imageUrl: PropTypes.string,
    children: PropTypes.any
}

export default BackgroundImage