import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle='OUR PROGRAMS' title='What We Offer' />
      <Programs />
      <About />
      <Title subTitle='Gallery' title='Campus Photos' />
    </div>
  )
}

export default App