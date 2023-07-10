import React from 'react'
import Layout from '../Layout'
import Hero from '../components/hero'
import Feature from '../components/feature'
import Carousel from '../components/carousel'
import Fleet from '../components/fleet'

function Home() {
  return (
    <Layout>
        <Hero/>
        <Feature/>
        <Fleet/>
        <Carousel/>
    </Layout>
  )
}

export default Home