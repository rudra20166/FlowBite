import React from "react";
import Image from "next/image";
import google from "../media/google.png";
import github from "../media/github.png";
import styled from "styled-components";
import logoImage from "../media/logo.png";
import LogoComp from "./LogoComp";
import User1 from '../media/user1.png'
import User2 from '../media/user2.png'
export default function PageThree() {
  return (
    <Page3>
      <Compleft>
        <Form>
          <FormHeading>Welcome Back</FormHeading>
          <SignUpSec>
            <GoogleIcon>
              <Google>
                {" "}
                <Image src={google} alt="Your Company Logo" />
              </Google>
              Sign up with Google
            </GoogleIcon>
            <GithubIcon>
              <Github>
                <Image src={github} alt="Your Company Logo" />
              </Github>
              Sign up with Github
            </GithubIcon>
          </SignUpSec>
          <Separator>
            <br />
            <p>or</p>
            <br />
          </Separator>
          <Inputs>
            <Label>Email</Label>
            <Input type="text" placeholder="name@example.com" />
            <Label>Password</Label>
            <Input type="password" placeholder="•••••••••••••••••" />
          </Inputs>
          <SubTag>
            <RememberSec>
              <Inputcheck type="checkbox" />

              <Remember> Remember Me</Remember>
            </RememberSec>
            <Forgot href="#">Forgot Password?</Forgot>
          </SubTag>
          <LoginButton>Sign in</LoginButton>

          <BottomLine>
            Don't have an accoutn yet? <Sideline href="#">Sign up</Sideline>{" "}
          </BottomLine>
        </Form>
      </Compleft>
      <CompRight>
        <SubComp>
          <LogoSec>
            <Logo>
              <Imagecomp src={logoImage} alt="Your Company Logo" />
              <Title>Flowbite</Title>
            </Logo>
          </LogoSec>
            <Comphead>
            Explore the world’s leading design portfolios.
            </Comphead>
            <Desc>
            Millions of designers and agencies around the world showcase their portfolio work on Flowbite - the home to the world’s best design and creative professionals.
            </Desc>
            <Subfoot>
                <Leftone>
                    <UserImage src={User1} />
                    <UserImage src={User2} />
                    <UserImage  src={User1} />
                    <UserImage src={User2} />
                </Leftone>
                <RightOne>Rated Best Over <Highlight>15.7k</Highlight> Reviews</RightOne>
            </Subfoot>
        </SubComp>
      </CompRight>
    </Page3>
  );
}

const UserImage=styled(Image)`
    width:1.5em;
    height:1.5em;
`
const Comphead=styled.h1`
          color:white;  
          font-size:2em;
          margin-top:1em;
          font-weight:bold;
          line-height:1em;
`
const Highlight=styled.span`
        font-weight:bold;
        color:white;

`
const Leftone=styled.div`
border-right:1px solid white;
padding-right:1em;
display:flex;
justify-content:space-between;
align-items:center;

`
const RightOne=styled.span`
        color:white;
        padding:0em 1em ;
`
const Subfoot=styled.div`
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin-top:1em;
`
const Desc=styled.p`
        color:white;
        font-size:1em;
        margin-top:1em;
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
`;
const Imagecomp = styled(Image)`
  width: 2em;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5em;
  color: white;
`;
const SignUpSec = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1em;
  margin-top: 1em;
`;
const SubComp = styled.div`
padding: 0em 5em;
`;

const BottomLine = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 1em;
  gap: 0.3em;
  font-weight: bold;
  align-items: center;
`;

const Sideline = styled.a`
  color: blue;
`;
const Input = styled.input`
  border-radius: 8px;
  margin-top: 0.5em;
  height: 2.5em;
  width: 100%;
`;
const Input1 = styled.input`
  border-radius: 2px;
  margin-top: 0.5em;
`;
const Inputs = styled.div``;
const Label = styled.div`
  font-weight: bold;
  margin-top: 0.5em;
`;

const LoginButton = styled.button`
  width: 100%;
  margin-top: 1em;
  height: 2.5em;
  font-size: 1em;
  color: white;
  background: #1a56db;
  border-radius: 8px;
  &:hover {
    background-color: #007bff;
    transform: 0.3s ease-in-out;
  }
`;
const Inputcheck = styled.input`
  border-radius: 2px;
  margin-top: 0.5em;
`;
const Forgot = styled.a`
  color: blue;
  &:hover {
    text-weight: bold;
  }
`;
const Remember = styled.p``;
const SubTag = styled.div`
  display: flex;
  margin-top: 1em;
  justify-content: space-between;
  align-items: center;
`;
const RememberSec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.2em;
`;
const Separator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 0.5em;
`;
const Google = styled.div`
  width: 2em;
  height: 2em;
`;
const Github = styled.div`
  width: 2em;
  height: 2em;
`;
const GoogleIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 8px;
  gap: 0.5em;
  font-weight: bold;
  padding: 10px 20px;
  font-size: 0.8em;
`;

const GithubIcon = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid gray;
  border-radius: 8px;
  gap: 0.5em;
  font-weight: bold;
  padding: 10px 20px;
  font-size: 0.8em;
`;
const FormHeading = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;
const Page3 = styled.div`
  width: 100%;

  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Form = styled.div`
  padding: 0em 7em;
`;

const Compleft = styled.div`
  height: 100%;
  width: 50%;
  padding: 10em 0em;
`;
const CompRight = styled.div`
  height: 100%;
  width: 50%;
  padding: 15em 0em;
  background-color: #1a56db;
`;
