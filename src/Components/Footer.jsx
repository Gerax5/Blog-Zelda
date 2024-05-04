import './Footer.css'
import PropTypes from 'prop-types';

const Footer = ({marginTop})=>{
    return (
        <div className="Footer" style={{marginTop:marginTop}}>
            Informacion
        </div>
    )
}

Footer.propTypes = {
    marginTop: PropTypes.string
}

export default Footer