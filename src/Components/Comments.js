import Comment from "./Comment";
import { commentList } from "./Data"

export default function Comments() {
    return(
        <div>
            {commentList.map((comment) => <Comment comment={comment} />)}
        </div>
    )
}