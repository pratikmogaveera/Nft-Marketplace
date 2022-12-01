import React from 'react'
import styles from '../styles'
import TopCreatorCard from './TopCreatorCard'
import { topCreators } from '../constants'

const TopCreator = () => {
  return (
    <div className={`${styles.interWidth} z-10`}>
      <div className={`${styles.paddings} ${styles.flexCenter} flex flex-col gap-4`}>
        <h1 className="text-white text-[42px] font-bold">Top List Creators</h1>
        <div className="flex flex-row justify-center items-center gap-8">
          <button className="text-white bg-gradient-to-r from-[#89C6FF] to-[#3633D0] py-[8px] px-[24px] rounded-[30px] font-bold">
            Popular
          </button>
          <button className="text-white bg-[#000] border-[#3633D0] border-[2px] py-[8px] px-[24px] rounded-[30px] font-bold">
            Sell NFT
          </button>
        </div>
      </div>
      <div className={`${styles.paddings} ${styles.flexCenter} flex flex-col lg:flex-row gap-8`}>
        {topCreators.map((creator, i) => <TopCreatorCard key={i} {...creator}/>)}
      </div>

    </div>
  )
}

export default TopCreator