import React from 'react'
import './App.css'

import Banner from './sections/banner'
import About from './sections/about'
import Footer from './sections/footer'
import Copyrights from './sections/copyrights'
import Gallery from './sections/gallery'
import Questions from './sections/questions'

import AnimatedText from './components/autoslideText'

const App = () => {
  return (
    <div className='content'>
      <Banner />
      <About />
      <Gallery />
      <Questions />
      <AnimatedText />
      <Footer />
      <Copyrights />
    </div>
  )
}

export default App