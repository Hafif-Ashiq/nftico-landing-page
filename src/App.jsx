import React from 'react'
import { Footer, Hero, NavBar, NoteableDrops, PopularNFTs, Resources, Sponsers, TopCollections, Trending, WalletConnect,Copyright } from './sections'
const App = () => {
  return (
    <div className='bg-background-color text-white font-outfit'>
      <NavBar />
      <Hero />
      <NoteableDrops />
      <TopCollections />
      <Trending />
      <Resources />
      <PopularNFTs />
      <WalletConnect />
      <Sponsers />
      <Footer />
      <Copyright/>

    </div>
  )
}

export default App