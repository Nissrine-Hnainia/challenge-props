import React from 'react'
import {Card, Button} from "react-bootstrap";
import PropTypes from "prop-types"

const User = ({name, bio, image, handleName, children}) => {
    // const {name, bio, image} = props
    // if (isValid) {
    //     return (
    //         <Card style={{ width: '18rem', marginBottom:"3rem" }}> 
    //             <Card.Img variant="top" src={image} />
    //             <Card.Body>
    //                 <Card.Title> {name} </Card.Title>
    //                 <Card.Text>
    //                 {bio}
    //                 </Card.Text>
    //                 <Button variant="primary" onClick={() => handleName(name)} >Click me!</Button> 
    //             </Card.Body>
    //         </Card>
    //     )
    // } else return (null)

        return (
        <Card style={{ width: '18rem', marginBottom:"3rem" }}> 
            <Card.Img variant="top" src={image} />
            <Card.Body>
            <Card.Title> {name} </Card.Title>
            <Card.Text>
            {bio}
            {children}
            </Card.Text>
            <Button variant="primary" onClick={() => handleName(name)} >Click me!</Button> 
            </Card.Body>
            
        </Card>
        )
}

User.propTypes = {
    name: PropTypes.string
}

User.defaultProps = {
    image: "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"
}

export default User

