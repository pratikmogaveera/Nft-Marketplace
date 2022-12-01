import React from 'react'
import styles from '../styles'

const Navbar = () => {
  console.log(styles.paddings)
  return (
    <div className="relative sm:p-16 xs:p-8 px-6 py-12 border-b-[2px] border-opacity-10 border-[#fff] flex flex-row items-center justify-between">
      <div className="z-0 gradient-01 opacity-50 absolute w-full top-0 bottom-0 right-0"/>
      <div className="z-10 lg:flex flex-row gap-6 w-[328px] text-white hidden">
        <h1 className="cursor-pointer text-[18px]">Marketplace</h1>
        <h1 className="cursor-pointer text-[18px]">Creator</h1>
        <h1 className="cursor-pointer text-[18px]">Community</h1>
      </div>

      <div >
        <h1 className='z-10 text-white font-extrabold text-[24px] lg:text-[32px]'>NFT BASE</h1>
      </div>

      <div className="z-10 lg:w-[328px] w-[170px] flex justify-end text-white">
        <button className="bg-gradient-to-r from-[#89C6FF] to-[#3633D0] py-[8px] px-[24px] rounded-[30px] font-bold">
          Connect Wallet
        </button>
      </div>
    </div>
  )
}

export default Navbar