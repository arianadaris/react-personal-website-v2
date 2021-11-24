import React, {useState, useEffect} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled, {keyframes} from 'styled-components';
import MediaQuery from 'react-responsive';
import '../index.css';

function Header(props)
{
    return (
        <Container>
            <MediaQuery minWidth={1050}>
                <Wrap className="desktop">
                    <Nav>
                        <NavItem><StyledLink to="/#about">About</StyledLink></NavItem>
                        <NavItem><StyledLink to="/#work">Work</StyledLink></NavItem>
                        <NavItem><StyledLink to="/#resume">Resume</StyledLink></NavItem>
                    </Nav>
                    <ContactBtn className="desktopContact"><StyledLink to="/#contact">Contact</StyledLink></ContactBtn>
                </Wrap>
            </MediaQuery>
            <MediaQuery minWidth={481} maxWidth={780}>
                <Wrap className="tablet">
                    <Nav>
                        <NavItem><StyledLink to="/#about">About</StyledLink></NavItem>
                        <NavItem><StyledLink to="/#work">Work</StyledLink></NavItem>
                        <NavItem><StyledLink to="/#resume">Resume</StyledLink></NavItem>
                    </Nav>
                    <ContactBtn className="desktopContact"><StyledLink to="/#contact">Contact</StyledLink></ContactBtn>
                </Wrap>
            </MediaQuery>
            <MediaQuery maxWidth={480}>
                <Wrap className="phone">
                    <Nav className="phoneNav">
                        <NavItem className="phoneNav"><StyledLink to="/#about">About</StyledLink></NavItem>
                        <NavItem className="phoneNav"><StyledLink to="/#work">Work</StyledLink></NavItem>
                        <NavItem className="phoneNav"><StyledLink to="/#resume">Resume</StyledLink></NavItem>
                    </Nav>
                </Wrap>
            </MediaQuery>
        </Container>
    )

}

export default Header;

const Container = styled.div`
    .desktop, .phone
    {
        justify-content: center;
    }

    background-color: white;
    position: fixed;
    width: 100%;
    z-index: 100;
`

const Wrap = styled.div`
    .desktopContact
    {
        padding: 10px;
        font-size: 20px;
        margin-right: 80px;
    }

    .tabletContact
    {
        font-size: 20px;
        padding: 10px;
        margin-right: 20px;
    }

    font-size: 20px;
    height: 10vh;
    display: flex;
    align-items: center;

`

const Nav = styled.ul`
    .phoneNav
    {
        margin-left: 30px;
        margin-right: 30px;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    list-style: none;
`

const NavItem = styled.li`
    margin-left: 60px;
    margin-right: 60px;
`

const StyledLink = styled(Link)`
    &:hover
    {
        color: #6597BE;
        border-bottom: 1.5px solid #6597BE;
    }

    text-decoration: none;
    color: inherit;
    transition: 0.2s ease all;
`

const ContactBtn = styled.button`
    &:hover
    {
        color: #6597BE;
        border: 1px solid #6597BE;
    }

    background-color: white;
    border: 1px solid black;
    position: absolute;
    right: 0;
    cursor: pointer;
    transition: 0.2s ease;
`