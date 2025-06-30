import React from 'react'
import Hero from './Hero/Hero'
import About from './About/About'
import Services from './Services/Services'
import Project from '../Project/Project'
import Skills from './Skills/Skills'
import Reviews from './Reviews/Reviews'
import Blog from './Blog/Blog'
import Contact from './About/Contact/Contact'


const Home = () => {
  return (
    <div>
    <div>
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="services"><Services /></section>
      <section id="projects"><Project /></section>
      <section id="skills"><Skills /></section>
      <section id="reviews"><Reviews /></section>
      <section id="blog"><Blog /></section>
      <section id="contact"><Contact /></section>
    </div>
    </div>
  )
}

export default Home