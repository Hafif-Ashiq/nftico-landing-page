import React from 'react'
import { Footer, Hero, NavBar, NoteableDrops, PopularNFTs, Resources, Sponsers, TopCollections, Trending, WalletConnect, Copyrights } from './sections'
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
      <Copyrights/>

    </div>
  )
}

export default App