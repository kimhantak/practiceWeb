import React, { createContext } from 'react';
import styled from 'styled-components';
import { Footer } from '../comp/Footer';
import Header from '../comp/Header';
import logo from '../logo.svg';
import MainArticle from './MainArticle';

const Container = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    @media screen and (min-width: 1200px) {
        width: 97%;
    }

    width: 90%;
    min-width: 265px;
    max-width: 1300px;
    min-height: auto;
    border: 5px solid white;
    border-radius: 3px;
`;

const Center = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    width: 100%;
`;

export const IconContext = createContext(null);

export function Home() {
    return (
        <Container className="Home">
            <IconContext.Provider value={logo}>
                <Header />
            </IconContext.Provider>
            <Center className="Center">
                <MainArticle />
                <Footer />
            </Center>
        </Container>
    );
}