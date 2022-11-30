import React from 'react'
import { trendings } from '../constants'
import TrendingCard from './TrendingCard'

const Trending = () => {
  return (
    <div className="flex justify-center items-center flex-col">
      <div className=" text-white mx-auto sm:p-16 xs:p-8 px-6 py-12 2xl:max-w-[1280px] justify-center items-center w-full gap-4 flex flex-col lg:flex-row">
        <div className="flex flex-[0.5]">
          <h1 className="font-bold text-[42px]">
            Trending This Week
          </h1>
        </div>
        <div className="flex flex-[0.5] flex-wrap">
          <p>Various kinds of Artwork categories that are trending this week. The trend will be reset every week. Don’t miss out on the best artworks every week</p>
        </div>
      </div>
      <div className="mx-auto sm:p-16 xs:p-8 px-6 py-12 2xl:max-w-[1280px] justify-center w-full gap-8 flex flex-col lg:flex-row flex-wrap">
        {trendings.map((trend, i)=> <TrendingCard 
          key={i}
          {...trend}
        />)}
      </div>
    </div>
  )
}

export default Trending