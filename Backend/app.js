const dotenv=require("dotenv");
dotenv.config();

const cors=require("cors");

const express=require("express");
const app=express();

app.use(cors());

const PORT=process.env.PORT;

app.listen(PORT,()=>{
    console.log(`server is listning to port ${PORT}`);
})

app.get("/videos",async(req,res)=>{
    try{
         const response = await fetch(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=IN&maxResults=30&key=${process.env.GOOGLE_API_KEY}`
    );

    const data = await response.json();
    return res.status(200).json({success:true,data});

    }catch(err){
        console.error(err.message);
        return res.status(400).json({success:false,message:"failed to fetch videos"})
    }
})

app.get("/suggest",async(req,res)=>{
    try{
        const {query}=req.query;
        const response=await fetch(  `http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=${query}`);
        const data=await response.json();
        return res.status(200).json({success:true,message:"Suggestions provided successfully",data})

    }catch(err){
        console.error(err.message);
        return res.status(400).json({success:false,message:"failed to provide suggestions"})
    }
})

app.get("/comments",async(req,res)=>{
    try{
        const {videoId}=req.query;
        const response=await fetch(`https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&maxResults=20&key=${process.env.GOOGLE_API_KEY}`)
        const data=await response.json();
        return res.status(200).json({success:true,message:"comments fetched successfully",comments:data})

    }catch(err){
        console.error(err.message);
        return res.status(400).json({success:false,message:"failed to fetch comments"});
    }
})