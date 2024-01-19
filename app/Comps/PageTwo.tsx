import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'
import HeroSectionTwo from './HeroSectionTwo'
export default function PageTwo() {
  return (
    <Page2>
        <Navbar/>
        <HeroSectionTwo/>
    </Page2>
  )
}
 const Page2 =styled.div`
 width:100%;
 height:100vh;
 `