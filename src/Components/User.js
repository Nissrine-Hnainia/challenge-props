import React from 'react';
import PropTypes from 'prop-types';
import {Card} from "react-bootstrap"

const User = ({fullName, age, image, handleName}) => {
    return (
        <Card style={{ width: '18rem' }} className="card" onClick={() => handleName(fullName)}>
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{fullName}</Card.Title>
                <Card.Text>
                {age} 
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

User.defaultProps = {
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
}

User.propTypes ={
    fullName: PropTypes.string.isRequired
}

export default User
