import React from 'react'
import Child from './Child'

const agenda= [
    "Introduction to React Props",
    "Type of props",
    "Children props",
    "Defualt props",
    "Proptypes",
    "Conditional rendering",
    "Handeling events"
]

const Parent = () => {
    const handleAlert = (name) => {
        alert(`Welcome ${name}`)
        console.log("done")
    }
    return (
        <div>
            <Child 
            title="React props WS" 
            students={13} 
            agenda={agenda} 
            conditional={true}
            handleAlert={handleAlert}
            >
                <div className="child-props">
                    <h3>We are children props</h3>
                    <img src="/logo192.png" alt="react"/>
                </div>
            </Child>
        </div>
    )
}

export default Parent
