import { useDispatch, useSelector } from "react-redux";
import { decider } from "../utils/appSlice";
import { useEffect } from "react";
// import { YOUTUBE_SUGGESTIONS_API } from "../utils/constants";
import { useState } from "react";
import { cacheResults } from "../utils/searchSlice";

export default function Header() {
  const [searchQuery,setSearchQuery]=useState("");
  const [suggestions,setSuggestions]=useState([]);
  const [showSuggestions,setShowSuggestions]=useState(false);
  const searchCache=useSelector((store)=>store.search);
 useEffect(() => {

   if(!searchQuery){
      setSuggestions([]);
      return;
    }

  const timer = setTimeout(() => {
   
    if (searchCache[searchQuery]) {
      setSuggestions(searchCache[searchQuery]);
      return;
    } else {
      getSearchSuggestions();
    }
  }, 200);

  return () => clearTimeout(timer);
}, [searchQuery,searchCache]);
    const dispatch=useDispatch();

    const handleHamBurgerClick=()=>{
        dispatch(decider());
    }


    const getSearchSuggestions=async()=>{
      const response=await fetch(`http://localhost:3400/suggest?query=${searchQuery}`);
      const json = await response.json();
      setSuggestions(json?.data[1]);
      dispatch(cacheResults({
        [searchQuery]:json?.data[1]
      }))
console.log(json?.data[1]);
     
      
    }

  return (
    <div className="grid grid-cols-12 items-center px-4 py-2 shadow-md bg-white">
      
      {/* Left Section */}
      <div className="col-span-2 flex items-center gap-4">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADPz89LS0uWlpb4+PiCgoIQEBCnp6fFxcXz8/OwsLB0dHTu7u76+vrd3d27u7uQkJB6enozMzPj4+NlZWUdHR2hoaHKyspeXl5vb28XFxc8PDxYWFiBgYHX19eStxeWAAACX0lEQVR4nO3dj04CMQzH8QmcggKK/BFF5f3fUi9okJi0O7akaff9PEF/uXGw0awpAQAAAAAAAAAAAAAAAEADZqvt2I/tajYs3uL5xp/nRX7AlXWxV1pl5uvW1pVebd1lBTxY11ngkBPR7xPsrfWAn9Y1FrrVAm6sKyy2URJurQsstpUD3lvXV8G9mPDBurwKHsSEc+vyKpiLCd+ty6vgXUxoXV0VjSfcWVdXwU5M+GFdXgUfYkKv+6a/5D3UyLq8CkZiwnRnXV+xOzlgmloXWGyqJEye97+9gxYwHa1LLHRUEzpfp+oa7b1YV1ngJSdgSjPrOq+WfSzc+dxEzbPOEn8sJt6O3NaTAUfeJ8vHkR+Py6HxAAAAAAAAAACAH91+OvFjuh/yv1PvaWz9X9Jg46cB+fY+m792SifN2a11qVdT29hPXq3rLPCaE/DNusoib3pA753ecpf3t866wmLa14bft8wv7W1jXV8FckC/zUJnctuQ/0WqLVN/P9b+G4sJ/bcIa03C1tVV0fgzjP85jP8ujf99GOFVIwcMsEy136Xx9xbx94cN7PEbOKfx/LbJPGtLaRT9vDTFP/PuRf/fAgAAAAAAAAAAOBL8nqjod32Fv6/Nb9tQ5p174e9NDH/3Zfz7S713mGrXCDtfoz1tnXp/hOpDjH+fd/w72ePfq++z3euSPBvBuroqGk8Yf86Mz23TJXlWkPcu757c6R1/Zlf8uWsNzM5z3MZ+ktHM7u2Q7VLGDMsG5pCmpd+v/bxZssnvHip3HnBqYKZzL/hcbgAAAAAAAAAAAAAAAADw6QtJMFO0DHiZNgAAAABJRU5ErkJggg=="
          alt="menu"
          className="w-6 cursor-pointer "
          onClick={handleHamBurgerClick}
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/1280px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="youtube logo"
          className="w-24 cursor-pointer"
        />
      </div>

      <div className="col-span-8 flex justify-center">
  <div className="relative w-full max-w-xl">

    {/* Input + Button */}
    <div className="flex">
      <input
        type="text"
        placeholder="Search"
        className="w-full border border-gray-300 rounded-l-full px-4 py-2
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={()=>setShowSuggestions(true)}
        onBlur={()=>{setTimeout(()=>setShowSuggestions(false),200)}}
      />

      <button
        className="px-6 border border-gray-300 border-l-0 
                   rounded-r-full bg-gray-100 hover:bg-gray-200"
      >
        🔍
      </button>
    </div>

    {/* Suggestions Dropdown */}
    {showSuggestions && suggestions.length > 0 && (
      <div className="absolute top-12 w-full bg-white shadow-lg rounded-lg border border-gray-200 z-50">
        <ul>
          {suggestions.map((suggestion) => (
            <li
              key={suggestion}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
            >
              🔍 {suggestion}
            </li>
          ))}
        </ul>
      </div>
    )}

  </div>
</div>

      {/* Right Section */}
      <div className="col-span-2 flex justify-end">
        <img
          src="https://plus.unsplash.com/premium_vector-1727955579176-073f1c85dcda?q=80&w=880&auto=format&fit=crop"
          alt="user avatar"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </div>

    </div>
  );
}