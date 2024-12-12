import React from "react";
import ReactPlayer from "react-player";
import './video.css';
import "./video_media.css";

const Video = () => {
    return (
        <div className={"video__div"}>
            <p className={"video__text"}>Видео о клубе <span className={"video__span"}> Moreon Fitness</span></p>
            <div style={{

                display: "flex",
                justifyContent: "center",
            }}>
                <div className={"video__player"}>
                    <ReactPlayer
                        width={"100%"}
                        height={"100%"}
                        controls
                        url={`https://www.youtube.com/watch?v=VARVH9aCRac`}/>
                </div>
            </div>
        </div>
    )
}

export default Video;