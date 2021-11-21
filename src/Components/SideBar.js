import Video from './Video'
import { suggestions } from "./Data"

export default function SideBar() {
    return (
        <div className="sidebar">
            {suggestions.map((video) => <Video video={video} />)}
        </div>
        
    );
}
