import React from "react";
import '../css/Course.css';
function Course({ course }) {
  const { id, title, description, image } = course;
  return (
    <div className="course">
      <div>
        <img src={image} width={300}/>
        <h4>{title}</h4>
        <h3>{description}</h3>
        <h5>{id}</h5>
      </div>
    </div>
  );
}

export default Course;
