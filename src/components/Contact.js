import React, {useState, useEffect} from 'react';
import styled, {keyframes} from 'styled-components';
import MediaQuery from 'react-responsive';
import background from '../images/ContactImage.png';

import emailjs from 'emailjs-com';
import apiKeys from '../apikeys.js';

const onSubmit=(e)=>{
    e.preventDefault();// Prevents default refresh by the browser
    emailjs.sendForm('service_x6qg7bd', apiKeys.TEMPLATE_ID, e.target, apiKeys.USER_ID)
        .then(result => {
        alert('Your message was sent. Thank you for reaching out!', result.text);
        },
        error => {
        alert( 'An error occurred. Please try again.',error.text)
        });
        var frm = document.getElementsByName('EmailForm')[0];
        frm.reset();
}

function Contact() 
{
    return (
        <Container>
            <MediaQuery minWidth={781}>
                <Section id="contact" className="desktop">
                    <Wrap className="desktopH">
                        <TextH1>Contact Me</TextH1>
                        <Line className="line1" />
                    </Wrap>
                    <Wrap className="contact">
                        <Wrap className="form">
                            <Form onSubmit={onSubmit} name="EmailForm">
                                <TextH3>Name</TextH3>
                                <Input className="desktopInput" name="name"/>
                                <TextH3>Subject</TextH3>
                                <Input className="desktopInput" name="subject"/>
                                <TextH3>Message</TextH3>
                                <TextArea className="desktopText" name="message"/>
                                <Input className="desktopSubmit" type="submit" value="Submit"/>
                            </Form>
                            <a href="mailto:arianarajewski@gmail.com" style={{textDecoration: 'none', color: 'black'}}><TextH3 style={{textAlign: 'center', marginTop: '60px'}}>arianarajewski@gmail.com</TextH3></a>
                        </Wrap>
                        <Wrap className="image" />
                    </Wrap>
                </Section>
            </MediaQuery>
            <MediaQuery minWidth={481} maxWidth={781}>
                <Section id="contact" className="tablet">
                    <Wrap className="tabletH">
                        <Line className="line2" />
                        <TextH1>Contact Me</TextH1>
                        <Line className="line3" />
                    </Wrap>
                    <Wrap className="contact">
                        <Wrap className="form">
                            <Form onSubmit={onSubmit} name="EmailForm" style={{marginLeft: '-10%'}} >
                                <TextH3>Name</TextH3>
                                <Input className="tabletInput" name="name"/>
                                <TextH3>Subject</TextH3>
                                <Input className="tabletInput" name="subject"/>
                                <TextH3>Message</TextH3>
                                <TextArea className="tabletInput" name="message"/>
                                <Input className="desktopSubmit" type="submit" value="Submit"/>
                            </Form>
                            <a href="mailto:arianarajewski@gmail.com" style={{textDecoration: 'none', color: 'black'}}><TextH3 style={{textAlign: 'center', marginTop: '60px', marginLeft: '-10%'}}>arianarajewski@gmail.com</TextH3></a>
                        </Wrap>
                    </Wrap>
                </Section>
            </MediaQuery>
            <MediaQuery maxWidth={480}>
                <Section id="contact" className="phone">
                    <Wrap className="phoneH">
                        <TextH1 style={{textAlign: 'center', marginTop: '20px'}}>Contact Me</TextH1>
                    </Wrap>
                    <Wrap className="contact">
                        <Wrap className="form">
                            <Form onSubmit={onSubmit} name="EmailForm" style={{marginLeft: '-30%', marginRight: '-15%'}}>
                                <TextH3 style={{fontSize: '18px'}}>Name</TextH3>
                                <Input className="phoneInput" name="name"/>
                                <TextH3 style={{fontSize: '18px'}}>Subject</TextH3>
                                <Input className="phoneInput" name="subject"/>
                                <TextH3 style={{fontSize: '18px'}}>Message</TextH3>
                                <TextArea className="phoneInput" name="message"/>
                                <Input className="desktopSubmit" type="submit" value="Submit" style={{fontSize: '18px', borderRadius: '0', width: '50%', marginLeft: '22.5%'}}/>
                            </Form>
                            <a href="mailto:arianarajewski@gmail.com" style={{textDecoration: 'none', color: 'black'}}><TextH3 style={{textAlign: 'center', marginTop: '30px', marginLeft: '-20%', fontSize: '18px'}}>arianarajewski@gmail.com</TextH3></a>
                        </Wrap>
                    </Wrap>
                </Section>
            </MediaQuery>
        </Container>
    );
}

export default Contact;

const Container = styled.div`
    .desktop
    {
        margin-top: 5vh;
    }

    .tablet
    {
        margin-top: 3%;
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
        .line2, .line3
        {
            width: 20%;
            margin-top: 15px;
            margin-left: 4%;
            margin-bottom: 2.5%;
            margin-right: 4%;
        }

        display: flex;
        justify-content: center;
        align-items: center;
    }

    .phoneH
    {

    }

    .contact
    {
        .form
        {
            .desktopSubmit
            {
                &:hover
                {
                    color: #206C96;
                    border: 1px solid #206C96;
                }

                border: 1px solid black;
                background-color: white;
                border-radius: 2%;
                width: 30%;
                padding: 10px;
                margin-left: 35%;
                font-size: 24px;
                transition: 0.2s ease;
                cursor: pointer;
                color: black;
            }

            width: 50%;
            height: 100%;
            margin-left: 10%;
        }

        .image
        {
            width: 50%;
            height: 100%;
            padding: 40px 0 40px 0;
            margin-left: 10%;
            background: url(${background});
            background-size: contain;
            background-repeat: no-repeat;
        }

        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 40px;
    }

    background-color: white;
    height: 80vh;
`

const TextH1 = styled.h1`
    z-index: 20;
    color: black;
    font-size: 48px;
    font-weight: bold;
`

const TextH3 = styled.h3`
    font-weight: normal;
    font-size: 24px;
`

const Input = styled.input`
    border: 1px solid lightGray;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 2%;
    padding: 10px;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
`

const TextArea = styled.textarea`
    border: 1px solid lightGray;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 2%;
    padding: 15px;
    width: 100%;
    height: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
`

const Wrap = styled.div`

`

const Form = styled.form`
    width: auto;
    margin-top: 40px;
    padding-left: 5%;
    padding-right: 5%;
`

const Line = styled.div`
    border-bottom: 1px solid black;
    height: 10px;
`