import PropTypes from 'prop-types'
const Course = ({course}) => {
    const {id} = course
    return (
        <div>
            <p>{id}</p>
            
        </div>
    );
};

Course.propTypes ={
    course: PropTypes.object.isRequired
}

export default Course;