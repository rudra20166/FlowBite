import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import google from '../media/google.png'
import github from '../media/github.png'
import Footer from './Footer'
import office from '../media/office.png'
import logoImage from '../media/logo.png'

import { z, ZodError } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';


type Inputs = {
  email: string;
  password: string;
}
const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters').max(20, 'Password must be at most 20 characters'),
});

export default function HeroSectionTwo() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <Hero2>
        <CompSection>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <LogoSec>
            <Logo>
              <Imagecomp src={logoImage} alt="Your Company Logo" />
              <Title>Flowbite</Title>
            </Logo>
          </LogoSec>
            <FormHeading>Welcome Back</FormHeading>
            <TopLine>Start your website in seconds. Don’t have an account?  <Sideline href='#'>Sign up</Sideline> </TopLine>
            <Inputs>
            <Input1>
            <Label>Email</Label>
            <Input type="text" placeholder="name@example.com" {...register('email', { required: true })}/>
            {errors.email && <div style={{ color: '#ed1515' }}>{(errors.email as ZodError).message}</div>}
            </Input1>
            <Input2>
            <Label>Password</Label> 
            <Input type="password" placeholder="•••••••••••••••••" {...register('password', { required: true })}/>
            {errors.password && <div style={{ color: '#ed1515' }}>{(errors.password as ZodError).message}</div>}
            
            </Input2>
            </Inputs>
            <Separator>
                <br/>
                <p>or</p>
                <br/>
            </Separator>
            <GoogleIcon>
                    <Google> <Image src={google} alt='Your Company Logo' /></Google>
                    Sign up with Google 
                </GoogleIcon>
                <GithubIcon>
                    <Github><Image src={github} alt='Your Company Logo' /></Github>
                    Sign up with Github
                </GithubIcon>
                <SubTag>
              <RememberSec>
                
              <Inputcheck type="checkbox"/>  

                <Remember> Remember Me</Remember>
              </RememberSec>
              <Forgot href='#'>Forgot Password?</Forgot>
            </SubTag>
            <LoginButton>Sign in</LoginButton>

            </Form>
            <CompRight>
              <ImageOffice src={office}/>
            </CompRight>
        </CompSection>
        <Footer/>
    </Hero2>
  )
}
const Google=styled.div`
        width:2em;
        height:2em;
`
const ImageOffice=styled(Image)`
      width:90%;
`
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
        margin-bottom:1em;
  
`;
const Imagecomp = styled(Image)`
  width: 1.5em;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 1.1em;
  
`;
const Inputcheck=styled.input`
border-radius:2px;
margin-top:0.5em;
`
const Forgot=styled.a`
    color:blue;
    &:hover{
      text-weight:bold;
    }
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
const Remember=styled.p`
`
const RememberSec=styled.div`
       display:flex;
    justify-content:center;
    align-items:center;
    gap:0.2em;
`
const Github=styled.div `
         width:2em;
        height:2em;
`
const SubTag=styled.div`
    display:flex;
    margin-top:1em;
    justify-content:space-between;
    align-items:center;
`
const GoogleIcon=styled.button`
     display:flex;
     width:100%;
    justify-content:center;
    align-items:center;
    border:1px solid gray;
    border-radius:8px;
    gap:0.5em;
    font-weight:bold;
    padding:5px 10px;
    font-size:1em;
    margin-top:1em;
`

const GithubIcon=styled.button`
     display:flex;
     width:100%;
    justify-content:center;
    align-items:center;
    border:1px solid gray;
    border-radius:8px;
    gap:0.5em;
    font-weight:bold;
    padding:5px 10px;
    font-size:1em;
    margin-top:1em;
`
const Inputs=styled.div`
    display:flex;
    justify-content:center;
    gap:1em;
    align-items:center;
`
const Input1=styled.div`

  
`

const Separator=styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    margin-top:0.5em;
`
const Input2=styled.div`
`
const Label=styled.div`
    font-weight: bold;
  margin-top:0.5em;

`
const Input=styled.input`
  border-radius:8px;
  margin-top:0.5em;
  height:2.5em;
  width:100%;
`
const CompSection=styled.div`
   display:flex;
   justify-content:space-evenly;
   align-items:center;
`
const Sideline=styled.a`
    color:blue;
`
const TopLine=styled.div`
         display:flex;
    justify-content:flex-start;
    margin-top:1em;
    
    color:gray;
    align-items:center;
`

const Form=styled.form`
width:40%;
border-radius:8px;
box-shadow: 0px  1px 8px rgba(0, 0, 0, 0.1);
padding:1.5em;
box-sizing:border-box;
`
const CompRight=styled.div`
width:40%;
`
const Hero2 =styled.div`
 width: 100%;
  height: 70vh;
  padding:1em 0em
  
 `
 const FormHeading=styled.div`
    font-size:1.5em;
    font-weight:bold;
`