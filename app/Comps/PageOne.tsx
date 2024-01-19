import React from 'react'
import Navbar from './Navbar'
import HeroSection from './HeroSectionOne'
import Footer from './Footer'
import styled from 'styled-components'

export default function PageOne() {
  return (
    <Page1>
      <Navbar/>
      <HeroSection/>
      
        
    </Page1>
  )
}
const Page1=styled.div`
  width:100%;

  height:100vh;
`
