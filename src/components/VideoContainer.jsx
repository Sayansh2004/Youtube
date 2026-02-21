import { useEffect,useState } from "react";
import VideoCard from "./VideoCard";

export default function VideoContainer(){
    const [videos,setVideos]=useState([]);
    useEffect(()=>{
      getVideos();
    },[]);

    const getVideos=async()=>{
        const data=await fetch("http://localhost:3400/videos");

        const json=await data.json();
        setVideos(json.data.items);
        // console.log(json);
    }
    return(
        <div>
            <div className="flex flex-wrap">
      {videos.map((video) => (
        <VideoCard key={video.id} info={video} />
      ))}
    </div>
            
        </div>
    );
}