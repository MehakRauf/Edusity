import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'

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
      <Testimonials/>
      <Title subTitle='Contact us' title='Get in Touch' />
    </div>
  )
}

export default App