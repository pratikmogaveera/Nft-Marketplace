import React, { useState } from 'react'
import { explores, exploreCategories } from '../constants'
import ExploreCard from './ExploreCard'


const Explore = () => {
  const [active, setActive] = useState(2)
  const [activeCard, setActiveCard] = useState('nft-1')
  console.log(activeCard)
  const buttonInActive = "bg-[#000] border-[#3633D0] border-[2px] py-[8px] px-[24px] rounded-[30px] font-semibold"
  const buttonActive = "bg-gradient-to-r from-[#89C6FF] to-[#3633D0]  border-[2px] border-[#000] py-[8px] px-[24px] rounded-[30px] font-semibold"
  
  return (
    <div className="z-10 text-white mx-auto sm:p-16 xs:p-8 px-6 py-12 2xl:max-w-[1280px] justify-center items-center w-full gap-4 flex flex-col">
        <h1 className="text-white text-[42px] font-bold">Explore Marketplace</h1>
        <div className="flex flex-row gap-4 overflow-x-auto w-full noscroll">
        {exploreCategories.map(({title, id}) => 
          <button 
            key={id}
            className={active === id ? buttonActive : buttonInActive}  
            onClick={()=>setActive(id)}
          >
            {title}
          </button>)}
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap gap-4 items-center justify-center mb-[44px]">
          {explores.map((data, i) => 
            <ExploreCard key={i} {...data} activeCard={activeCard} setActiveCard={() => setActiveCard(data.id)}/> 
          )}
        </div>
        <button className={buttonInActive}>View More
        </button>
    </div>
  )
}

export default Explore