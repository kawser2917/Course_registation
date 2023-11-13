import PropTypes from 'prop-types'
const Courseinfo = ({title,idx}) => {
    console.log(title)
    return (
        <div>
            <ul>
                <li>{idx+1}. {title}</li>
            </ul>
            
        </div>
    );
};

Courseinfo.propTypes = {
    title: PropTypes.string
}



export default Courseinfo;