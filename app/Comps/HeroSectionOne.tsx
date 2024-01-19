import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import LogoComp from './LogoComp'
import google from '../media/google.png'
import github from '../media/github.png'
import checkIcon from '../media/check-icon.png'
import Link from 'next/link'
import logoImage from '../media/logo.png'
import { useForm,SubmitHandler } from 'react-hook-form'




type Inputs = {
  email: string;
  password: string;
}
export default function HeroSectionOne () {
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>()


  return (
    
      <Hero>
        <HeroLeft>
        
        <LogoSec>
            <Logo>
              <Imagecomp src={logoImage} alt="Your Company Logo" />
              <Title>Flowbite</Title>
            </Logo>
          </LogoSec>
            
          <TextArea>
           
            <TextSection>
              <Heading>
                {' '}
                <CheckIcon>
                  <Image src={checkIcon} alt='Your Company Logo' />
                </CheckIcon>
                Get started quickly{' '}
              </Heading>
              <SubHeading>
                Integrate with developer-friendly APIs or choose low-code or
                pre-built solutions.
              </SubHeading>
            </TextSection>
            <TextSection>
              <Heading>
                {' '}
                <CheckIcon>
                  <Image src={checkIcon} alt='Your Company Logo' />
                </CheckIcon>
                Get Started Quickly
              </Heading>
              <SubHeading>
                Integrate with developer-friendly APIs or choose low-code or
                pre-built solutions.
              </SubHeading>
            </TextSection>
            <TextSection>
              <Heading>
                {' '}
                <CheckIcon>
                  <Image src={checkIcon} alt='Your Company Logo' />
                </CheckIcon>
                Get Started Quickly
              </Heading>
              <SubHeading>
                Integrate with developer-friendly APIs or choose low-code or
                pre-built solutions.
              </SubHeading>
            </TextSection>
          </TextArea>
        </HeroLeft>
        <HeroRight>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <FormHeading>Welcome Back</FormHeading>
            <SignUpSec>
                <GoogleIcon>
                    <Google> <Image src={google} alt='Your Company Logo' /></Google>
                    Sign up with Google 
                </GoogleIcon>
                <GithubIcon>
                    <Github><Image src={github} alt='Your Company Logo' /></Github>
                    Sign up with Github
                </GithubIcon>
            </SignUpSec>
            <Separator>
                <br/>
                <p>or</p>
                <Blankdiv></Blankdiv>
            </Separator>
            <Inputs>
            <Label>Email</Label>
            <Input type="text" placeholder="name@example.com" {...register('email', { required: true })}/>
            {errors.email && <span style={{ color: '#ed1515' }}>Email is required</span>}
            <Label>Password</Label>
            <Input type="password" placeholder="•••••••••••••••••" {...register('password', { required: true })}/>
            {errors.password && <span style={{ color: '#ed1515' }}>Password is required</span>}
            
            </Inputs>
            <SubTag>
              <RememberSec>
                
                <Input1 type="checkbox"/>  
                <Remember> Remember Me</Remember>
              </RememberSec>
              <Forgot href='#'>Forgot Password?</Forgot>
            </SubTag>
            <LoginButton>Create account</LoginButton>

            <BottomLine>Don't have an accoutn yet? <Sideline href='#'>Sign up</Sideline> </BottomLine>

            </Form>
        </HeroRight>
      </Hero>
  
  )
}
const Logo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
`;
const LogoSec = styled.div`
        display:flex;
        justify-content:enter;
        align-items:center;
`;
const Imagecomp = styled(Image)`
  width: 2em;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5em;
  
`;

const BottomLine=styled.div`
         display:flex;
    justify-content:flex-start;
    margin-top:1em;
    gap:0.3em;
    font-weight:bold;
    align-items:center;
`
const Remember=styled.p`
`
const Sideline=styled.a`
    color:blue;
`
const LoginButton=styled.button`
      width:100%;
      margin-top:1em;
      height:2.5em;
      font-size:1em;
      color:white;
      background:#1A56DB;
      border-radius:8px;
      &:hover {
        background-color: #007bff;
        transform: 0.3s ease-in-out;
      }
`
const Forgot=styled.a`
    color:blue;
    &:hover{
      text-weight:bold;
    }
`

const RememberSec=styled.div`
       display:flex;
    justify-content:center;
    align-items:center;
    gap:0.2em;
`
const SubTag=styled.div`
    display:flex;
    margin-top:1em;
    justify-content:space-between;
    align-items:center;
`
const Hero = styled.div`
  width: 100%;
  height: 70vh;
  padding:0em 5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`
const Input=styled.input`
  border-radius:8px;
  margin-top:0.5em;
  height:2.5em;
  width:100%;
`
const Input1=styled.input`
 border-radius:2px;
  margin-top:0.5em;
  
`
const Inputs=styled.div`
`
const Label=styled.div`
    font-weight: bold;
  margin-top:0.5em;

`
const Blankdiv=styled.div`
    border:1px solid black;
`

const SignUpSec=styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    gap:1em;
    margin-top:1em;
    

`
const Separator=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:0.5em;
`
const Google=styled.div`
        width:2em;
        height:2em;
`
const Github=styled.div `
         width:2em;
        height:2em;
`
const GoogleIcon=styled.button`
     display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid gray;
    border-radius:8px;
    gap:0.5em;
    font-weight:bold;
    padding:5px 10px;
    font-size:0.8em;
`

const GithubIcon=styled.button`
     display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid gray;
    border-radius:8px;
    gap:0.5em;
    font-weight:bold;
    padding:5px 10px;
    font-size:0.8em;
` 
const HeroLeft = styled.div`
  
  height: 100%;
  padding: 4em 0em;
`
const HeroRight = styled.div`

  padding-top:2em;
  height: 100%;
`
const FormHeading=styled.div`
    font-size:1.5em;
    font-weight:bold;
`
const Form=styled.form`
   
    border-radius:8px;
    box-shadow: 0px  1px 8px rgba(0, 0, 0, 0.1);
    padding:1.5em;
    box-sizing:border-box;
`


const TextSection = styled.div`
  width: auto;
  margin-top: 1em;
`
const Heading = styled.h1`
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
`
const SubHeading = styled.h2`
  font-size: 1em;
  margin-left: 2em;
`
const CheckIcon = styled.div`
  width: 1.5em;
`
const TextArea = styled.div``
