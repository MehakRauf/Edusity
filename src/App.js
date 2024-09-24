import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/campus/Campus'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle='OUR PROGRAMS' title='What We Offer' />
      <Programs />
      <About />
      <Title subTitle='Gallery' title='Campus Photos' />
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Student Says' />
    </div>
  )
}

export default App