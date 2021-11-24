import React, {useState, useEffect} from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled, {keyframes} from 'styled-components';
import MediaQuery from 'react-responsive';
import Main from './Main';
import About from './About';
import Work from './Work';
import Resume from './Resume';
import Contact from './Contact';

function Home() {
    useEffect(() => {
        document.title = "Ariana Daris";
      }, []);

    return (
        <Container>
            <MediaQuery minWidth={781}>
                <Main />
                <About />
                <Work />
                <Resume />
                <Contact />
            </MediaQuery>
            <MediaQuery minWidth={481} maxWidth={780}>
                <Main />
                <About />
                <Work />
                <Resume />
                <Contact />
            </MediaQuery>
            <MediaQuery maxWidth={480}>
                <Main />
                <About />
                <Work />
                <Resume />
                <Contact />
            </MediaQuery>
        </Container>
    );
}

export default Home;

const Container = styled.div`

`