import './Footer.css'
import PropTypes from 'prop-types';

const Footer = ({marginTop})=>{
    return (
        <div className="Footer" style={{marginTop:marginTop}}>
            <div className='dataFooter'>
                <h2 style={{color:"white", textAlign:"center"}}>Creado por Gerax</h2>
            </div>
        </div>
    )
}

Footer.propTypes = {
    marginTop: PropTypes.string
}

export default Footer