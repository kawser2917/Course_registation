import PropTypes from 'prop-types'
import Courseinfo from '../Courseinfo/Courseinfo';
const Coursesinfo = ({titles,creditHour}) => {
    return (
        <div className='w-2/5'>
             <h3 className="text-2xl">Course Name</h3>
            {
                titles.map((title,idx) =><Courseinfo key={idx} title={title} idx={idx}></Courseinfo>)
            }

            <h3 className="text-2xl mt-5"> Total Credit Hour: {creditHour}</h3>
            
        </div>
    );
};

Coursesinfo.propTypes = {
    titles: PropTypes.array.isRequired,
    creditHour : PropTypes.number.isRequired,
}

export default Coursesinfo;