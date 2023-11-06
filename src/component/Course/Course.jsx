import PropTypes from 'prop-types'
const Course = ({course,handleTitle}) => {
    const {courseimg,coursetitle,coursedescription,courseprice,credithour} = course
    return (
        <div className='border-2 rounded-xl my-2 p-3'>
            <img src={courseimg} alt="" className='w-full' />
            <h3 className="text-3xl mb-4">{coursetitle}</h3>
            <p className='mb-4'>{coursedescription}</p>
            <div className='flex justify-between mb-4'>
                <p>$ Price: {courseprice}</p>
                <p>Credit: {credithour}hr</p>
            </div>
            <button className='p-2 bg-blue-500 w-full font-bold text-white bor rounded-xl mb-3' onClick={()=>handleTitle(coursetitle)}>Select</button>
        </div>
    );
};

Course.propTypes ={
    course: PropTypes.object.isRequired,
    handleTitle: PropTypes.func.isRequired,
}

export default Course;