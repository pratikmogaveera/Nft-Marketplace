import React from 'react'
import styles from '../styles'

const Navbar = () => {
  console.log(styles.paddings)
  return (
    <div className="sm:p-16 xs:p-8 px-6 py-12 bg-black flex flex-row items-center justify-between">
      
      <div className="lg:flex flex-row gap-6 w-[328px] text-white hidden">
        <h1>Marketplace</h1>
        <h1>Creator</h1>
        <h1>Community</h1>
      </div>

      <div>
        <h1 className='text-white font-extrabold '>NFT MARKETPLACE</h1>
      </div>

      <div className="lg:w-[328px] w-[170px] flex justify-end text-white">
        <button className="bg-gradient-to-r from-[#89C6FF] to-[#3633D0] py-[8px] px-[24px] rounded-[30px] font-bold">
          Connect Wallet
        </button>
      </div>
    </div>
  )
}

export default Navbar