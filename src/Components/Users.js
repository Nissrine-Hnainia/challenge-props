import React from 'react'
import User from './User'

const Users = () => {
    const handleName = (name) => {
        alert(`hello ${name}`)
    }
    
    return (
        <div className="users">
            <User fullName="Wissem Chehaider" age={32} handleName={handleName} image="https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"/>
            <User fullName="Hakim Chaabani" age={28} handleName={handleName}/>
            <User fullName="Ghassen Kefi" age={25} handleName={handleName} image="https://cdn2.iconfinder.com/data/icons/avatars-99/62/avatar-370-456322-512.png"/>
        </div>
    )
}

export default Users
