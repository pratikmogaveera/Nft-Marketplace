import React from 'react'
import styles from '../styles'

const Footer = () => {
  return (
    <div className={`${styles.innerWidth} flex flex-col`}>
      <div className={`${styles.flexCenter} ${styles.paddings} bg-[#5b5b5b]  bg-opacity-20 backdrop-blur-lg rounded-[24px] border-[2px] border-[#fff] border-opacity-50 flex flex-col gap-8 mx-12`}>
        <div className="text-white flex flex-col justify-center items-center gap-4">
          <h1 className="font-bold text-[32px]">Never miss a drop!</h1>
          <p className="font-normal opacity-70">
          Subscribe to super-exclusive drop list and be the first to know about upcoming drops
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-4 w-full">
          <input className="py-[8px] px-[24px] rounded-[30px] bg-[#fff] bg-opacity-30 text-center" placeholder='Enter your email address.'/>
          <button className="text-white bg-gradient-to-r from-[#89C6FF] to-[#3633D0] py-[8px] px-[24px] rounded-[30px] font-bold">
            Subscibe
          </button>
        </div>
      </div>
      <div className="footer-gradient"/>
      <div className="flex justify-center w-full my-10">
        <p className="text-white text-[14px] font-normal opacity-50">
          © 2018 - 2022 NFT BASE, Inc
        </p>
      </div>
    </div>
  )
}

export default Footer