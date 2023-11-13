import PropTypes from 'prop-types'
const Courseinfo = ({title}) => {
    console.log(title)
    return (
        <div>
            <ul>
                <li>{title}</li>
            </ul>
            
        </div>
    );
};

Courseinfo.propTypes = {
    title: PropTypes.string
}



export default Courseinfo;