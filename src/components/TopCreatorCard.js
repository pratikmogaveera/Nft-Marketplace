import React from 'react'

const TopCreatorCard = ({id, name, profile, cover, artwork, following}) => {
  const buttonInActive = "bg-[#000] border-[#3633D0] border-[2px] py-[8px] px-[24px] rounded-[12px] font-semibold"
  const buttonActive = "bg-gradient-to-r from-[#89C6FF] to-[#3633D0]  border-[2px] border-[#000] py-[8px] px-[24px] rounded-[12px] font-semibold"
  
  return (
    <div className="relative h-[370px] w-[300px] bg-[#1a1a1a] rounded-[12px] flex flex-col z-10">
      <div className="flex flex-[0.4] h-[40%]">
        <img src={cover} className="w-full object-cover rounded-t-[12px] " alt={id}/>
      </div>
      <div className="flex h-[65px] justify-center w-full -mt-[25px] ">
        <img src={profile} className="w-[60px] h-[60px] flex rounded-full items-center justify-center border-[8px] border-[#1a1a1a]" alt={id}/>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[24px] text-white font-bold">{name}</h1>
        <p className="text-[18px] bg-gradient-to-r p-0 from-[#ffe600] to-[#F7FC0E] text-transparent bg-clip-text"><span className="text-[24px] font-bold">{artwork}K</span> Artworks</p>
      </div>
      <div className="absolute w-full p-4 text-white bottom-0">
        <button className={`${!following ? buttonActive : buttonInActive} w-full`}>
          {following ? "Following" : "Follow"}
          
        </button>
      </div>
    </div>
  )
}

export default TopCreatorCard