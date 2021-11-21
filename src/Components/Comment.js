import React from "react"


const Comment = ({comment}) => {
    return (
        <div className="Comment">
        <div className="UserInfo">
          <div className="UserInfo-name">
            {comment.name} 
            <br></br>
            <div className="user-email">{comment.email}</div>
          </div>
        </div>
        <div className="Comment-text">
          {comment.body}
        </div>
        <hr></hr>
      </div>
    );
}

export default Comment;
