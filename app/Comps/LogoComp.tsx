import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import logoImage from '../media/logo.png'
import Link from 'next/link'

export default function LogoComp() {
  return (
    <Logo>
          <Imagecomp src={logoImage} alt='Your Company Logo' />
          <Title href="#">Flowbite</Title>
    </Logo>
  )
}
const Logo = styled.div`
  display: flex;
justify-content: center;
align-items: center;
gap: 0.5em;
`
const Imagecomp=styled(Image)`
width: 2em;

`
const Title = styled(Link)`
  font-weight: bold;
  font-size: 1.5em;
`
