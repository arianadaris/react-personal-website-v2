import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import MediaQuery from 'react-responsive';
import background from '../images/ProjectBackground.png';
import personalWebsite from '../images/PersonalWebsite.png';
import palettesWebsite from '../images/PalettesWebsite.png';

function Work() {
    return (
        <Container>
            <MediaQuery minWidth={781}>
                <Section id="work" className="desktop" style={{height: 'auto', marginBottom: '40px'}}>
                    <Wrap className="desktopH">
                        <TextH1>My Personal Projects</TextH1>
                        <Line className="line1" />
                    </Wrap>
                    <Wrap className="desktopProjs">
                        <Wrap className="desktopProj" style={{marginBottom: '60px', marginTop: '40px'}}>
                            <Wrap className="desktopImage1" />
                            <Wrap className="desktopInfo">
                                <TextH1 style={{fontSize: '36px', paddingTop: '5%', textAlign: 'center'}}>Ariana Daris</TextH1>
                                <TextH1 style={{fontStyle: 'italic', fontSize: '28px', fontWeight: 'normal', paddingTop: '2%', textAlign: 'center'}}>My personal portfolio website.</TextH1>
                                <Wrap style={{display: 'flex', justifyContent: 'center', marginTop: '20px', display: 'flex', justifyContent: 'center'}}>
                                    <a href="https://github.com/arianadaris/react-personal-website" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}><Button className="desktopBtn">Read More</Button></a>
                                </Wrap>
                            </Wrap>
                        </Wrap>
                        <Wrap className="desktopProj" style={{marginBottom: '60px'}}>
                            <Wrap className="desktopImage2" />
                            <Wrap className="desktopInfo">
                                <TextH1 style={{fontSize: '36px', paddingTop: '5%', textAlign: 'center'}}>Mock Block Palettes Website</TextH1>
                                <TextH1 style={{fontStyle: 'italic', fontSize: '28px', fontWeight: 'normal', paddingTop: '2%', textAlign: 'center'}}>A recreation of a Minecraft block palette website.</TextH1>
                                <Wrap style={{display: 'flex', justifyContent: 'center', marginTop: '20px', display: 'flex', justifyContent: 'center'}}>
                                    <a href="https://github.com/arianadaris/block-palettes" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}><Button className="desktopBtn">Read More</Button></a>
                                </Wrap>
                            </Wrap>
                        </Wrap>
                    </Wrap>
                </Section>
            </MediaQuery>
            <MediaQuery minWidth={481} maxWidth={780}>
                <Section id="work" className="tablet" style={{height: 'auto', marginBottom: '40px'}}>
                    <Wrap className="tabletH">
                        <TextH1>My Personal Projects</TextH1>
                        <Line className="line2" />
                    </Wrap>
                    <Wrap className="tabletProjs" style={{marginTop: '40px', marginLeft: '8%'}}>
                        <Wrap className="tabletProj" style={{marginBottom: '20px'}}>
                            <Wrap className="tabletImage1" />
                            <Wrap className="tabletInfo" style={{marginBottom: '20px'}}>
                                <TextH1 style={{fontSize: '42px', paddingTop: '5%', textAlign: 'center'}}>Ariana Daris</TextH1>
                                <TextH1 style={{fontStyle: 'italic', fontSize: '28px', fontWeight: 'normal', paddingTop: '2%', textAlign: 'center'}}>My personal portfolio website.</TextH1>
                                <Wrap style={{display: 'flex', justifyContent: 'center', marginTop: '20px', display: 'flex', justifyContent: 'center'}}>
                                    <a href="https://github.com/arianadaris/react-personal-website" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}><Button className="tabletBtn">Read More</Button></a>
                                </Wrap>
                            </Wrap>
                        </Wrap>
                        <Wrap className="tabletProj">
                            <Wrap className="tabletImage2" />
                            <Wrap className="tabletInfo" style={{marginBottom: '20px'}}>
                                <TextH1 style={{fontSize: '42px', paddingTop: '5%', textAlign: 'center'}}>Mock Block Palettes Website</TextH1>
                                <TextH1 style={{fontStyle: 'italic', fontSize: '28px', fontWeight: 'normal', paddingTop: '2%', textAlign: 'center'}}>A recreation of a Minecraft block palette website.</TextH1>
                                <Wrap style={{display: 'flex', justifyContent: 'center', marginTop: '20px', display: 'flex', justifyContent: 'center'}}>
                                    <a href="https://github.com/arianadaris/block-palettes" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}><Button className="tabletBtn">Read More</Button></a>
                                </Wrap>
                            </Wrap>
                        </Wrap>
                    </Wrap>
                </Section>
            </MediaQuery>
            <MediaQuery maxWidth={480}>
                <Section id="work" className="phone" style={{height: 'auto', marginBottom: '40px'}}>
                    <Wrap className="phoneH">
                        <TextH1>My Personal Projects</TextH1>
                    </Wrap>
                    <Wrap className="phoneProjs" style={{marginTop: '40px'}}>
                        <Wrap className="phoneProj" style={{marginBottom: '20px'}}>
                            <Wrap className="phoneImage1" />
                            <Wrap className="phoneInfo" style={{marginBottom: '20px'}}>
                                <TextH1 style={{fontSize: '32px', paddingTop: '5%', marginLeft: '-10%'}}>Ariana Daris</TextH1>
                                <TextH1 style={{fontStyle: 'italic', fontSize: '20px', fontWeight: 'normal', paddingTop: '2%', marginLeft: '-10%'}}>My personal portfolio website.</TextH1>
                                <Wrap style={{display: 'flex', justifyContent: 'center', marginTop: '20px', marginLeft: '-75%'}}>
                                <a href="https://github.com/arianadaris/react-personal-website" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}><Button className="phoneBtn">Read More</Button></a>
                                </Wrap>
                            </Wrap>
                        </Wrap>
                        <Wrap className="phoneProj">
                            <Wrap className="phoneImage2" />
                            <Wrap className="phoneInfo" style={{marginLeft: '5%', marginBottom: '20px'}}>
                                <TextH1 style={{fontSize: '32px', paddingTop: '5%'}}>Mock Block Palettes Website</TextH1>
                                <TextH1 style={{fontStyle: 'italic', fontSize: '20px', fontWeight: 'normal', paddingTop: '2%'}}>A recreation of a Minecraft block palette website.</TextH1>
                                <Wrap style={{display: 'flex', justifyContent: 'center', marginTop: '20px', marginLeft: '-65%'}}>
                                    <a href="https://github.com/arianadaris/block-palettes" target="_blank" rel="noreferrer" style={{textDecoration: 'none'}}><Button className="phoneBtn">Read More</Button></a>
                                </Wrap>
                            </Wrap>
                        </Wrap>
                    </Wrap>
                </Section>
            </MediaQuery>
        </Container>
    );
}

export default Work;

const Container = styled.div`
    .desktop
    {
        margin-left: 5%;
        margin-top: 5%;
    }

    .tablet
    {
        margin-left: 5%;
        margin-top: 5%;
    }

    .phone
    {
        margin-left: 5%;
        margin-top: 5%;
    }

`

const Section = styled.div`
    .desktopH
    {
        .line1
        {
            width: 60%;
            margin-top: 40px;
            margin-left: 4%;
            margin-bottom: 2.5%;
        }

        display: flex;
        align-items: center;
    }

    .tabletH
    {
        .line2
        {
            width: 30%;
            margin-top: 30px;
            margin-left: 3%;
            margin-bottom: 2.5%;
        }

        display: flex;
        align-items: center;
    }

    .phoneH
    {
        
    }

    .desktopProjs
    {
        .desktopProj
        {
            background: url(${background});
            background-repeat: no-repeat;
            background-size: cover;
            width: 95%;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .desktopImage1
        {
            width: 100%;
            height: 80%;
            background: url(${personalWebsite});
            background-repeat: no-repeat;
            background-size: cover;
            margin: 40px;
        }

        .desktopImage2
        {
            width: 100%;
            height: 80%;
            background: url(${palettesWebsite});
            background-repeat: no-repeat;
            background-size: cover;
            margin: 40px;
        }

        .desktopInfo
        {
            width: 90%;
            height: 100%;
            margin-top: 150px;
        }
        
    }

    .tabletProjs
    {
        .tabletProj
        {
            background: url(${background});
            background-repeat: no-repeat;
            background-size: cover;
            width: 85%;
            height: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .phoneProjs
    {
        .phoneProj
        {
            background: url(${background});
            background-repeat: no-repeat;
            background-size: cover;
            width: 95%;
            height: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    height: 130vh;
    background-color: white;
`

const Wrap = styled.div`
    
`

const Line = styled.div`
    border-bottom: 1px solid black;
    height: 10px;
`

const TextH1 = styled.h1`
    font-size: 48px;
`

const Button = styled.button`
    &:hover
    {
        color: #44698F;
        border: 1px solid #44698F;
    }

    border: 1px solid black;
    padding: 15px;
    font-size: 20px;
    background-color: inherit;
    cursor: pointer;
    transition: 0.2s ease all;
    color: black;
`