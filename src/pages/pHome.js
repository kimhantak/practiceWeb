import React, { createContext } from 'react';
import styled from 'styled-components';
import { Footer } from '../comp/Footer';
import Header from '../comp/Header';
import logo from '../logo.svg';

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
    height: 95vh;
    border: 5px solid white;
    border-radius: 3px;
`;

const Center = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const IconContext = createContext("");

export function Home() {
    return (
        <Container>
            <IconContext.Provider value={logo}>
                <Header />
            </IconContext.Provider>
            <Center>
                <Footer />
            </Center>
        </Container>
    );
}