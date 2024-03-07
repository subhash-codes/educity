import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Contact from './Components/Contact/Contact'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our PROGRAM' title='What we Offer'/>
        <Programs />
        <About />
        <Title subtitle='GALLERY' title='Campus Photos'/>
        <Campus />
        <Title subtitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials />
        <Title subtitle='Conact us' title='Get in touch'/>
        <Contact />
      </div>
    </div>
  )
}

export default App