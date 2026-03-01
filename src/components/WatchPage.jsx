import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import LiveChat from './LiveChat';
// import CommentsCard from "./CommentsCard";

export default function WatchPage() {
  const [comments,setComments]=useState([]);

    const [params]=useSearchParams();
    // console.log(params.get("v"));
    const dispatch=useDispatch();

    // const fetchComments=async()=>{
    //   try{
    //     const res=await fetch("http://localhost:3400/comments?videoId="+params.get("v"));
    //     const json=await res.json();
    //     setComments(json?.comments?.items);
       
    //   }catch(err){
    //     console.error(err.message);
    //   }
    // }
    useEffect(()=>{
      // fetchComments();
      dispatch(closeMenu());
    },[dispatch])


  return (
    <div className='flex w-full gap-4 p-4'>
       
       {/* Video Section */}
       <div className="flex-1">
         <iframe 
           className="w-full h-[600px]"
           src={"https://www.youtube.com/embed/"+params.get("v")} 
           title="YouTube video player" 
           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
           referrerPolicy="strict-origin-when-cross-origin" 
           allowFullScreen>
         </iframe>
       </div>

       {/* <CommentsCard commentsInfo={comments}/> */}

       {/* Live Chat Section */}
       <div className="w-[400px]">
         <LiveChat/>
       </div>

    </div>
  )
}