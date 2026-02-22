import { useEffect,useState } from "react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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
        <Link to={"/watch?v="+video.id} key={video.id}><VideoCard  info={video} /></Link>
        
      ))}
    </div>
            
        </div>
    );
}