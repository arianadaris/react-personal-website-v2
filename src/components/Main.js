import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import MediaQuery from 'react-responsive';
import background from '../images/Background.png';
import {ReactComponent as Wave1} from '../images/BackWave.svg';
import {ReactComponent as Wave2} from '../images/MidWave.svg';
import {ReactComponent as Wave3} from '../images/FrontWave.svg';

function Main()
{
    return (
    <Container>
        <MediaQuery minWidth={781}>
                <Section className="main desktopSection">
                    <TextGroup className="desktopGroup">
                        <TextH1 style={{fontSize: '56px'}}>Hi, I'm Ariana Daris</TextH1>
                        <TextH3 style={{fontSize: '32px', marginTop: '20px'}}>A UX/UI designer who wants to<br></br>make the Internet feel more like home.</TextH3>
                        <Line />
                        <a href="/#contact" style={{textDecoration: 'none'}}><ContactBtn>Contact Me</ContactBtn></a>
                    </TextGroup>
                    <Wrap className="desktopWrap">
                        <BackWave />
                        <MidWave />
                        <FrontWave />
                    </Wrap>
                    <Wrap className="desktopIcons">
                        <a href="https://www.instagram.com/arianadaris/" target="_blank" rel="noreferrer">
                            <Icon>
                                <img src="https://img.icons8.com/material-outlined/35/FFFFFF/instagram-new--v1.png" alt="Instagram"/>
                            </Icon>
                        </a>
                        <a href="https://github.com/arianadaris" target="_blank" rel="noreferrer">
                            <Icon>
                                <img src="https://img.icons8.com/material-outlined/35/FFFFFF/github.png" alt="GitHub"/>
                            </Icon>
                        </a>
                        <a href="https://www.linkedin.com/in/ariana-rajewski/" target="_blank" rel="noreferrer">
                            <Icon>
                                <img src="https://img.icons8.com/ios-glyphs/35/FFFFFF/linkedin.png" alt="LinkedIn"/>
                            </Icon>
                        </a>
                    </Wrap>
                </Section>
            </MediaQuery>
            <MediaQuery minWidth={481} maxWidth={780}>
                <Section className="main tabletSection">
                    <TextGroup className="tabletGroup">
                        <TextH1 style={{fontSize: '48px'}}>Hi, I'm Ariana Daris</TextH1>
                        <TextH3 style={{fontSize: '28px', marginTop: '20px'}}>A UX/UI designer who wants to<br></br>make the Internet feel more like home.</TextH3>
                        <Line className="tabletLine"/>
                        <a href="/#contact" style={{textDecoration: 'none'}}><ContactBtn className="tabletBtn">Contact Me</ContactBtn></a>
                    </TextGroup>
                    <Wrap className="tabletWrap">
                        <MidWave />
                        <FrontWave />
                    </Wrap>
                </Section>
            </MediaQuery>
            <MediaQuery maxWidth={480}>
                <Section className="main phoneSection">
                    <TextGroup className="phoneGroup">
                        <TextH1 style={{fontSize: '36px'}}>Hi, I'm<br></br>Ariana Daris</TextH1>
                        <TextH3 style={{fontSize: '20px', marginTop: '20px'}}>A UX/UI designer who wants to<br></br>make the Internet feel more like home.</TextH3>
                        <Line className="phoneLine"/>
                        <a href="/#contact" style={{textDecoration: 'none'}}><ContactBtn className="phoneBtn">Contact Me</ContactBtn></a>
                    </TextGroup>
                    <Wrap className="phoneWrap">
                        <FrontWave className="phoneWave"/>
                    </Wrap>
                </Section>
            </MediaQuery>
    </Container>
    );
}

export default Main;

const waveMotion = keyframes`
    0%
    {
        transform: scaleX(1);
    }
    50%
    {
        transform: scaleX(1.3);
    }
    100%
    {
        transform: scaleX(1);
    }
`

const Container = styled.div`
    .desktopSection
    {
        height: 80vh;
        background-image: url(${background});
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tabletSection
    {
        height: 85vh;
        background-image: url(${background});
    }

    .phoneSection
    {
        height: 80vh;
        background-image: url(${background});
        display: flex;
        justify-content: center;
        padding-top: 8vh;
    }

    .about
    {
        background-color: #376A92;
        height: 100vh;
    }

    padding-top: 10vh;
    height: 100%;
    width: 100%;
`

const Section = styled.div`
    .desktopGroup
    {
        margin-top: -5%;
        padding-left: 10%;
        width: 55%;
    }

    .tabletGroup
    {
        position: absolute;
        top: 23vh;
        left: 10vh;
        width: 65%;
    }

    .desktopWrap
    {
        width: 45%;
    }

    .desktopIcons
    {
        margin-top: 60%;
        margin-right: 20px;
        z-index: 98;
    }

    width: 100%;
    overflow: hidden;
`

const TextGroup = styled.div`
    .tabletLine
    {
        width: 70%;
        margin-top: 30px;
        margin-left: 10%;
    }

    .tabletContact
    {
        margin-left: 30%;
    }

    .phoneLine
    {
        margin-top: 20px;
        margin-left: 0;
        width: 80%;
    }

    .phoneContact
    {
        margin-left: 0;
        font-size: 20px;
        margin-top: 30px;
    }

    z-index: 99;
`

const TextH1 = styled.h1`
    color: black;
    font-weight: bold;
`

const TextH3 = styled.h3`
    font-weight: normal;
    font-style: italic;
`

const Line = styled.div`
    border-bottom: 1px solid black;
    width: 60%;
    height: 10px;
    margin-top: 40px;
    margin-left: 7%;
`

const ContactBtn = styled.button`
    &:hover
    {
        color: #206C96;
        border: 1px solid #206C96;
    }

    background-color: transparent;
    padding: 10px;
    font-size: 20px;
    border: 1px solid black;
    margin-top: 40px;
    margin-left: 25%;
    cursor: pointer;
    transition: 0.2s ease;
    z-index: 98;
    color: black;
`

const Wrap = styled.div`
    .phoneWave
    {
        right: -45px;    
    }

    height: 100%;
    position: relative;
`

const BackWave = styled(Wave1)`
    position: absolute;
    right: -55px;
    top: 5vh;
    z-index: 2;
    animation-name: ${waveMotion};
    animation-duration: 8s;
    animation-iteration-count: infinite;
`

const MidWave = styled(Wave2)`
    position: absolute;
    right: -55px;
    top: 17vh;
    z-index: 3;
    animation-name: ${waveMotion};
    animation-duration: 8s;
    animation-iteration-count: infinite;
`

const FrontWave = styled(Wave3)`
    position: absolute;
    right: -55px;
    top: 25vh;
    z-index: 4;
    animation-name: ${waveMotion};
    animation-duration: 8s;
    animation-iteration-count: infinite;
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