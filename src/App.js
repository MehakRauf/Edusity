import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title subTitle='OUR PROGRAM' title='What We Offer'/>
      <Programs />
    </div>
  )
}

export default App