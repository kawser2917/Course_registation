import PropTypes from 'prop-types'
import Courseinfo from '../Courseinfo/Courseinfo';
const Coursesinfo = ({titles}) => {
    return (
        <div className='w-2/5'>
             <h3 className="text-2xl">Course Name</h3>
            {
                titles.map((title,idx) =><Courseinfo key={idx} title={title}></Courseinfo>)
            }
            
        </div>
    );
};

Coursesinfo.propTypes = {
    titles: PropTypes.array.isRequired,
}

export default Coursesinfo;