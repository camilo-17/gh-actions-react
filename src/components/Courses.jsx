import React from 'react';

import './styles/Courses.css';

function Courses({ data }) {
    const { title, img } = data;
    return (
        <div className="img-container-course">
            <img className="img-course" src={img} alt={title} />
        </div>
    );
}

export default Courses;
