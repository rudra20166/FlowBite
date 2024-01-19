'use client'
import React from 'react'
import styled from 'styled-components'
import PageOne from './Comps/PageOne'
import PageTwo from './Comps/PageTwo'
import PageThree from './Comps/PageThree'
export default function page() {
  return (
    <Page>

    <PageOne/>
    <PageTwo/>
    <PageThree/>
    </Page>
  )
}

const Page=styled.div`
     
      margin:0;
      padding:0;
      box-sizing:border-box;
    
`


