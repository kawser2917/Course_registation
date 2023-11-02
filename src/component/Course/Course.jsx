import PropTypes from 'prop-types'
const Course = ({course}) => {
    const {id} = course
    return (
        <div className='w-1/3'>
            <p>{id}</p>
            
        </div>
    );
};

Course.propTypes ={
    course: PropTypes.object.isRequired
}

export default Course;