import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import MediaQuery from 'react-responsive';
import background from '../images/AboutBackground.png';

function About() {
    return (
        <Container>
            <MediaQuery minWidth={781}>
                <Section id="about" className="desktop">
                    <Wrap className="helloWorld">
                        <Line className="helloWorldLine"/>
                        <TextH1 className="helloWorldH1">HELLO, WORLD!</TextH1>
                    </Wrap>
                    <Wrap className="aboutText">
                        <TextH1 style={{fontStyle: 'italic'}}>Hi, I'm Ariana!</TextH1>
                        <TextP style={{fontStyle: 'italic'}} className="desktopP">
                            Fun Fact, my name is Ariana Daris Rajewski. Daris is my middle name!
                        </TextP>
                        <TextP className="desktopP">
                            I am a UX designer from Phoenix, Arizona. Currently, I am completing my junior year at Arizona State University. I anticipate to graduate with a <Highlight>Bachelor's Degree in Computer Science with a concentration in Software Engineering</Highlight> in December of 2022.
                        </TextP>
                        <TextP className="desktopP">
                            In my free time, I <Highlight>enjoy learning about UX/UI</Highlight> and front end libraries. Lately, I have been learning about NodeJS with a personal project.
                        </TextP>
                        <TextP className="desktopP">
                            Currently, I work as a coding instructor for kids from ages 7-14. I help them learn and implement proper coding practices, and practice error debugging while developing games in <Highlight>JavaScript, LUA and C#</Highlight> (Unity/Visual Studio).
                        </TextP>
                        <Wrap className="buttons">
                            <a href="ArianaRajewskiResume.pdf" download>
                                <Button>My Resume</Button>
                            </a>
                            <a href="https://github.com/arianadaris" target="_blank" rel="noreferrer">
                                <Button>My GitHub</Button>
                            </a>
                            <a href="https://www.linkedin.com/in/ariana-rajewski/" target="_blank" rel="noreferrer">
                                <Button>My LinkedIn</Button>
                            </a>
                        </Wrap>
                    </Wrap>
                </Section>
            </MediaQuery>
            <MediaQuery minWidth={481} maxWidth={780}>
                <Section id="about" className="tablet">
                    <Wrap className="aboutText">
                        <TextH1 style={{fontStyle: 'italic'}}>Hi, I'm Ariana!</TextH1>
                        <TextP style={{fontStyle: 'italic'}} className="tabletP">
                            Fun Fact, my name is Ariana Daris Rajewski. Daris is my middle name!
                        </TextP>
                        <TextP className="tabletP">
                            I am a UX designer from Phoenix, Arizona. Currently, I am completing my junior year at Arizona State University. I anticipate to graduate with a <Highlight>Bachelor's Degree in Computer Science with a concentration in Software Engineering</Highlight> in December of 2022.
                        </TextP>
                        <TextP className="tabletP">
                            In my free time, I <Highlight>enjoy learning about UX/UI</Highlight> and front end libraries. Lately, I have been learning about NodeJS with a personal project.
                        </TextP>
                        <TextP className="tabletP">
                            Currently, I work as a coding instructor for kids from ages 7-14. I help them learn and implement proper coding practices, and practice error debugging while developing games in <Highlight>JavaScript, LUA and C#</Highlight> (Unity/Visual Studio).
                        </TextP>
                        <Wrap className="buttons">
                            <a href="ArianaRajewskiResume.pdf" download>
                                <Button>My Resume</Button>
                            </a>
                            <a href="https://github.com/arianadaris" target="_blank" rel="noreferrer">
                                <Button>My GitHub</Button>
                            </a>
                            <a href="https://www.linkedin.com/in/ariana-rajewski/" target="_blank" rel="noreferrer">
                                <Button>My LinkedIn</Button>
                            </a>
                        </Wrap>
                    </Wrap>
                </Section>
            </MediaQuery>
            <MediaQuery maxWidth={480}>
                <Section id="about" className="phone">
                    <Wrap className="aboutText">
                        <TextH1 style={{fontStyle: 'italic', marginTop: '20px'}} className="phoneHi">Hi, I'm Ariana!</TextH1>
                        <TextP style={{fontStyle: 'italic'}} className="phoneP">
                            Fun Fact, my name is Ariana Daris Rajewski. Daris is my middle name!
                        </TextP>
                        <TextP className="phoneP">
                            I am a UX designer from Phoenix, Arizona. Currently, I am completing my junior year at Arizona State University. I anticipate to graduate with a <Highlight>Bachelor's Degree in Computer Science with a concentration in Software Engineering</Highlight> in December of 2022.
                        </TextP>
                        <TextP className="phoneP">
                            In my free time, I <Highlight>enjoy learning about UX/UI</Highlight> and front end libraries. Lately, I have been learning about NodeJS with a personal project.
                        </TextP>
                        <TextP className="phoneP">
                            Currently, I work as a coding instructor for kids from ages 7-14. I help them learn and implement proper coding practices, and practice error debugging while developing games in <Highlight>JavaScript, LUA and C#</Highlight> (Unity/Visual Studio).
                        </TextP>
                        <Wrap className="buttonsP" style={{marginBottom: '20px'}}>
                            <a href="ArianaRajewskiResume.pdf" download>
                                <Button className="phoneBtn">My Resume</Button>
                            </a>
                            <a href="https://github.com/arianadaris" target="_blank" rel="noreferrer">
                                <Button className="phoneBtn">My GitHub</Button>
                            </a>
                            <a href="https://www.linkedin.com/in/ariana-rajewski/" target="_blank" rel="noreferrer">
                                <Button className="phoneBtn">My LinkedIn</Button>
                            </a>
                        </Wrap>
                    </Wrap>
                </Section>
            </MediaQuery>
        </Container>
    );
}

export default About;

const Container = styled.div`
    .desktop
    {
        padding-top: 5%;
    }

    .tablet
    {
        padding-top: 5%;
        margin-top: -50px;
    }

    .phone
    {
        padding-top: 5%;
    }

    height: 100%;
    width: 100%;
    margin-top: -2px;
    z-index: 99;
`

const Section = styled.div`
    .helloWorld
    {
        position: absolute;
        margin-top: 33%;
        margin-left: -12%;
        font-size: 28px;
    }

    .aboutText
    {
        .buttons
        {
            margin-top: 40px;
        }

        .buttonsP
        {
            margin-left: -12%;
            margin-top: 40px;
        }

        .desktopP
        {
            font-size: 24px;
            width: 60%;
        }

        .tabletP
        {
            font-size: 18px;
            width: 80%;
        }

        .phoneP
        {
            font-size: 18px;
            width: 95%;
            margin-left: -12%;
            margin-right: 0;
        }

        .phoneHi
        {
            margin-left: -12%;
        }

        margin-left: 15%;
    }

    height: auto;
    background-image: url(${background});
    background-repeat: no-repeat;
    padding-bottom: 5%;
`

const Wrap = styled.div`
    .helloWorldLine
    {
        height: 20%;
        width: 10px;
        background-color: red;
    }

    .helloWorldH1
    {
        transform: rotate(-90deg);
        font-size: 28px;
    }

    .phoneBtn
    {
        font-size: 16px;
        margin-right: 5px;
    }

    z-index: 99;
`

const Line = styled.div`
    
`

const Icon = styled.div`
    &:hover
    {
        transform: scale(1.1);
    }

    cursor: pointer;
    border-radius: 10%;
    margin-top: 15px;
    z-index: 98;
    transition: 0.2s ease all;
`

const TextH1 = styled.h1`
    z-index: 20;
    color: white;
    font-size: 48px;
    font-weight: 400;
`

const TextP = styled.p`
    color: white;
    font-weight: 300;
    margin-top: 40px;
`

const Highlight = styled.span`
    color: #44FFDD;
`

const Button = styled.button`
    &:hover
    {
        color: #44FFDD;
        border: 1px solid #44FFDD;
    }

    border: 1px solid white;
    background-color: inherit;
    font-size: 24px;
    padding: 10px;
    margin-right: 40px;
    color: white;
    cursor: pointer;
    transition: 0.2s ease all;
`   