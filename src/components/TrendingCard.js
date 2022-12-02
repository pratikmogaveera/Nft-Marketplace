import React from 'react'

const TrendingCard = ({imgUrl, id, title, price}) => {
  return (
    <div className="z-10 relative text-white w-full justify-center lg:w-[500px] h-[470px]">
      <img src={imgUrl} alt={title} className="mx-auto object-cover h-[90%] w-[90%] rounded-[24px]"/>
      <div className="rounded-[12px] absolute bottom-[5%] p-4 z-10 w-full border-[2px] bg-gray-400 bg-opacity-20 backdrop-blur">
        <div className='flex flex-row gap-4'>
          <div className="flex flex-col flex-[0.6] gap-1">
            <h1 className="font-semibold text-[24px]">{title}</h1>
            <h1 className="font-bold text-[22px] bg-gradient-to-r p-0 from-[#ffe600] to-[#F7FC0E] text-transparent bg-clip-text">{price}</h1>
          </div>
          <div className="flex-[0.5]  flex justify-center items-center">
          <button className="bg-gradient-to-r from-[#89C6FF] to-[#3633D0] py-[8px] px-[24px] h-fit rounded-[30px] font-bold">
            Collect Now
        </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrendingCard