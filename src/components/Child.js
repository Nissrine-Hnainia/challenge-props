import React from 'react';
import PropTypes from "prop-types";

const Child = ({title, students, agenda, children, conditional, handleAlert}) => {
    return (
        <div>
            <h1>{title}</h1> 
            <p>Number of students assisting the workshop: {students}</p>
            <ul>
                {agenda.map((el, key) => 
                <li key={key}>{el}</li>
                )}
            </ul>
            {children}
            {conditional && (
                <h3>This is conditional rendering</h3>
            )}
            <button onClick={() => handleAlert('Samia')}>click me!</button>
        </div>
    )
}

//default props
Child.defaultProps ={
    title : "I am the default value"
}

//type checking
Child.propTypes = {
    title : PropTypes.string.isRequired,
    students : PropTypes.number.isRequired,
    agenda: PropTypes.arrayOf(PropTypes.string)
}

export default Child
