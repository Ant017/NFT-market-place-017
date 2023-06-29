import { useState } from 'react'
import './App.css'
import { TopBar } from './components/topbar/TopBar'
import { DiscoverCollect } from './components/discover/DiscoverCollect'
import { AmazeNFT } from './components/amaze-nft/AmazeNFT'
import { TopCollection } from './components/top-collection/TopCollection'
import { FeaturedCollection } from './components/featured/FeaturedCollection'
import { SignUp } from './components/signup/SignUp'
import { DiscoverMore } from './components/discover-more/DiscoverMore'
import { Footer } from './components/footer/Footer'

function App() {
  return (
    <>
      <div className="NFT-marketplace">
        <div className="div-2">
          <TopBar />
          <div><hr className="horizontal-line-1"></hr></div>
          <div className="vertical-line-1"></div>
          <DiscoverCollect />
          <AmazeNFT />
          <TopCollection />
          <FeaturedCollection />
          <SignUp />
          <DiscoverMore />
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App
