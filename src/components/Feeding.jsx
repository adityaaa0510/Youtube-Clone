import React,{useContext,useEffect} from "react";
import {Context} from "../context/contextApi"
import LeftNav from "./LeftNav";
import VideoCard from "./VideoCard";

const Feeding = () => {
  const {loading,searchResult}=useContext(Context);
  useEffect(()=>{
    document.getElementById("root").classList.remove("custom-h");
    if(searchResult){
    searchResult.map(item=>console.log(item));
    }
  },[])
  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav/>
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
        <div className ="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {searchResult && searchResult &&
          searchResult?.map((item,idx)=>{
             if(item?.type!== "video") return false;
             return (
              <VideoCard key={idx} 
              video={item?.video}
              />

             )
          })}
        </div>
      </div>
      
    </div>
  )
}

export default Feeding
