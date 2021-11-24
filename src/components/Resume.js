import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import MediaQuery from 'react-responsive';
import background from '../images/ResumeBackground.png';
import resumePNG from '../images/Resume.png';

function Resume()
{
    return (
        <Container>
            <MediaQuery minWidth={781}>
                <Section id="resume" className="desktop">
                    <Wrap className="desktopH">
                        <TextH1>MY RESUME</TextH1>
                        <Line className="line1" />
                    </Wrap>
                    <Wrap className="desktopResW">
                        <Wrap className="desktopRes" />
                        <TextGroup className="desktopGroup">
                            <TextH1 style={{fontStyle: 'italic', fontSize: '36px'}}>Here's how I look on paper!</TextH1>
                            <Wrap style={{display: 'flex', justifyContent: 'center', marginTop: '40px'}}>
                                <a href="ArianaRajewskiResume.pdf" download="ArianaRajewskiResume.pdf">
                                    <Button className="desktopBtn">Download Resume</Button>
                                </a>
                            </Wrap>
                        </TextGroup>
                    </Wrap>
                </Section>
            </MediaQuery>
            <MediaQuery minWidth={481} maxWidth={780}>
                <Section id="resume" className="tablet">
                    <Wrap className="tabletH">
                        <TextH1>MY RESUME</TextH1>
                        <Line className="line2" />
                    </Wrap>
                    <Wrap className="tabletResW">
                        <Wrap className="tabletRes" />
                        <TextGroup className="tabletGroup">
                            <Wrap style={{marginTop: '20px'}}>
                                <TextH1 style={{fontStyle: 'italic', fontSize: '28px'}}>Here's how I look on paper!</TextH1>
                                <Wrap style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                                    <a href="ArianaRajewskiResume.pdf" download>
                                        <Button className="desktopBtn">Download Resume</Button>
                                    </a>
                                </Wrap>
                            </Wrap>
                        </TextGroup>
                    </Wrap>
                </Section>
            </MediaQuery>
            <MediaQuery maxWidth={480}>
                <Section id="resume" className="phone" style={{paddingTop: '20px'}}>
                    <Wrap className="phoneH">
                        <TextH1 style={{textAlign: 'center'}}>MY RESUME</TextH1>
                    </Wrap>
                    <Wrap className="phoneResW">
                        <Wrap className="phoneRes" />
                        <TextGroup className="phoneGroup">
                            <TextH1 style={{fontStyle: 'italic', fontSize: '24px', textAlign: 'center', marginTop: '20px'}}>Here's how I look on paper!</TextH1>
                            <Wrap style={{display: 'flex', justifyContent: 'center', marginTop: '20px'}}>
                                <a href="ArianaRajewskiResume.pdf" download>
                                    <Button className="desktopBtn">Download Resume</Button>
                                </a>
                            </Wrap>
                        </TextGroup>
                    </Wrap>
                </Section>
            </MediaQuery>
        </Container>
    );
}

export default Resume;

const Container = styled.div`
    .desktop
    {
        padding-top: 5%;
        padding-left: 5%;
    }

    .tablet
    {
        padding-left: 5%;
        padding-top: 5%;
    }

    .phone
    {
        
    }

    height: 100%;
    width: 100%;
    margin-top: -2px;
    z-index: 1;
`

const Section = styled.div`
    .desktopH
    {
        .line1
        {
            width: 70%;
            margin-top: 40px;
            margin-left: 4%;
            margin-bottom: 2.5%;
        }

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .tabletH
    {
        .line2
        {
            width: 50%;
            margin-top: 15px;
            margin-left: 4%;
            margin-bottom: 2.5%;
        }

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .phoneH
    {
        
    }

    .desktopResW
    {
        .desktopRes
        {
            height: 750px;
            width: 600px;
            background: url(${resumePNG});
            background-size: cover;
            background-repeat: no-repeat;
            margin-left: 10%;
            margin-top: 3%;
            box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.15);
        }

        .desktopGroup
        {
            display: block;
            margin-left: auto;
            margin-right: auto;
        }
        
        display: flex;
        align-items: center;
    }

    .tabletResW
    {
        .tabletRes
        {
            height: 750px;
            width: 600px;
            background: url(${resumePNG});
            background-size: cover;
            background-repeat: no-repeat;
            margin-left: 10%;
            margin-top: 3%;
            box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.15);
        }

        .tabletGroup
        {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    .phoneResW
    {
        .phoneRes
        {
            background: url(${resumePNG});
            height: 450px;
            width: 95%;
            background-size: cover;
            background-repeat: no-repeat;
            margin-left: 2%;
            margin-top: 3%;

        }
    }

    height: auto;
    padding-bottom: 5vh;
    background-image: url(${background});
`

const Wrap = styled.div`

`

const TextH1 = styled.h1`
    font-size: 48px;
`

const Line = styled.div`
    border-bottom: 1px solid black;
    height: 10px;
`

const TextGroup = styled.div`

`

const Button = styled.button`
    &:hover
    {
        color: #5E87F2;
        border: 1px solid #5E87F2;
    }

    border: 1px solid black;
    padding: 15px;
    font-size: 20px;
    background-color: inherit;
    cursor: pointer;
    transition: 0.2s ease all;
    color: black;
`