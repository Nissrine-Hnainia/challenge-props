import ReactPlayer from "react-player";

export default function Video({video}){
    return(<div>
        <ReactPlayer
            className='react-player'
            url={video.url}
            width='100%'
            height='100%'
        />
        <div className="views">
            {video.views}
        </div>
        <br></br>
    </div>

        );
}