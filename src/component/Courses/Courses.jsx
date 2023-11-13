import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types'

const Courses = ({handleTitle, handleCreditHour}) => {
    const [courses,setCourses] = useState([])

    useEffect(()=>{
        fetch("courses.json")
        .then(res => res.json())
        .then(data => setCourses(data))
    },[])
    return (
      <div className="w-2/3">
        <h3 className="text-2xl text-center">Total Course: {courses.length}</h3>
          <div className="grid grid-cols-1 md:grid-col-2 lg:grid-cols-3 gap-3">
            
            {
                courses.map( (course,idx) => <Course key={idx} course={course} handleTitle={handleTitle} handleCreditHour={handleCreditHour}></Course>)
            }  
        </div>
      </div>
    );
};

Courses.propTypes ={
    handleTitle: PropTypes.func.isRequired,
    handleCreditHour : PropTypes.func.isRequired,
}


export default Courses;