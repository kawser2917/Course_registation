import PropTypes from 'prop-types'
const Courseinfo = ({title}) => {
    console.log(title)
    return (
        <div>
           
            <p>{title}</p>
            
        </div>
    );
};

Courseinfo.propTypes = {
    title: PropTypes.string
}



export default Courseinfo;