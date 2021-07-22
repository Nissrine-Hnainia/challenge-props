import React from 'react'
import User from './User'

const Users = ({isValid}) => {
    const handleName = (n) => {
        alert(`hello ${n}`)
    }
    return (
        <div >
            {
                isValid &&
                <div className="users"> 
                <User name="Chérif" bio="MERN STACK Student" handleName={handleName} image="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png" />
                <User name="Karim" bio="Student at Esprit" handleName={handleName} />
                <User name="Eya" bio="Student at GoMyCode" handleName={handleName} />
                <User name="Chérif" bio="MERN STACK Student" handleName={handleName} image="https://cdn1.iconfinder.com/data/icons/avatar-97/32/avatar-02-512.png" />
                <User name="Karim" bio="Student at Esprit" handleName={handleName} />
                <User name="Eya" bio="Student at GoMyCode" handleName={handleName} >
                    <img alt="kitty" src="https://www.citynews1130.com/wp-content/blogs.dir/sites/9/2017/06/05/cat.jpg" style={{width:"300px"}} />
                </User>
                </div>
            }
        </div>
    )
}

//turthy && truthy ==>  truthy
//truthy && falsy ==> falsy

export default Users
