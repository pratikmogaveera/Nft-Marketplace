import React from 'react'

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center z-10">
      <div className="mx-auto sm:p-16 xs:p-8 px-6 py-12 2xl:max-w-[1280px] justify-center w-full gap-3 flex flex-col lg:flex-row">
        <div className="flex flex-[0.5] flex-col lg:mr-8 ">
          <p className="text-[70px] flex flex-wrap font-normal leading-[80px] text-white">
            <span>Discover & Collect Super <span className="bg-gradient-to-r p-0 from-[#ffe600] to-[#F7FC0E] text-transparent bg-clip-text font-extrabold">Rare Digital</span> Digital Artworks</span>
          </p>
          <p className="text-white lg:mr-8">
          The largest NFT marketplace. Authentic and truly unique digital creation. Signed and issued by the creator, made possible by blockchain technology
          </p>
          <div className="flex flex-row gap-8 w-full mt-[24px]">
            <button className="text-white bg-gradient-to-r from-[#89C6FF] to-[#3633D0] py-[8px] px-[24px] rounded-[30px] font-bold">
              Let's Explore
            </button>
            <button className="text-white bg-[#000] border-[#3633D0] border-[2px] py-[8px] px-[24px] rounded-[30px] font-bold">
              Sell NFT
            </button>
          </div>
        </div>
        <div className="flex relative flex-[0.3] lg:mt-0 mt-[24px] justify-center">
          <div>
          <img src="/assets/nft1.jpg" alt="nft1 1" className="rounded-[24px]"/>
          </div>
          <div className="scale-[0.7] lg:scale-[1] rounded-[12px] absolute bottom-0 p-8 z-10 w-[620px] border-[2px] bg-gray-400 bg-opacity-20 backdrop-blur">
            <div className='flex flex-row gap-4'>
              <img src="/assets/metamast.png" alt="meta"/>
              <img src="/assets/binance.png" alt="binance"/>
              <img src="/assets/coinbase.png" alt="coin"/>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Hero