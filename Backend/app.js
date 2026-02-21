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