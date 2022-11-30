import React from 'react'

const ExploreCard = ({id, imgUrl, title, price, activeCard, setActiveCard}) => {
  return (
      <div className="flex flex-col transition-all ease-in-out text-white justify-between w-[270px] h-[420px] bg-gray-800 rounded-[24px] p-4 cursor-pointer"
        onClick={setActiveCard}
      >
        <div className={`${activeCard===id ? "h-[60%]" : "h-[80%]"}`}>
          <img 
            src={imgUrl} 
            alt={title} 
            className="mx-auto object-cover h-full w-full rounded-[24px]"
          />
        </div>
        <div className="flex flex-row justify-between items-center gap-2">
          <h1 className="font-semibold text-[24px]">{title}</h1>
          <h1 className="font-bold text-[22px] bg-gradient-to-r p-0 from-[#ffe600] to-[#F7FC0E] text-transparent bg-clip-text">{price}</h1>
        </div>
        <div className={`${activeCard===id ? "flex" : "hidden"} w-full items-center justify-center mx-auto`}>
          <button className="bg-gradient-to-r from-[#89C6FF] to-[#3633D0] py-[8px] w-full px-[24px] h-fit rounded-[30px] font-bold">
            Collect Now
          </button>
        </div>
      </div>
  )
}

export default ExploreCard
