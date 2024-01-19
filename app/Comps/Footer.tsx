import styled from 'styled-components'
import Image from 'next/image'
import fb from '../media/fb.png'

export default function Footer() {
    return (
      <FooterComp>
            <FootLeft>
            © 2021 Flowbite, LLC. All rights reserved.
            </FootLeft>
            <FootRight>
           
            </FootRight>
      </FooterComp>
    )
  }

const FooterComp=styled.div`
    height:20vh;
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 0px 100px;
    color:gray;
    position: absolute;
    
    
`

const FootLeft=styled.div`
  display: 100px;
  
 
`
const FootRight=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:0.5em;
`