import React from "react";
import '../css/Course.css';
function Course({ course }) {
  const { id, title, description, image } = course;
  return (
    <div className="course">
         <img src={image} width={300}/>
      <div className="course-content">
        <h2>{title}</h2>
        <h5>{description}</h5>
        <h4>{id}</h4>
      </div>
    </div>
  );
}

export default Course;
