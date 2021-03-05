import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Logo from './Logo';

const Container = styled.div`
    display: flex;
    padding: 10px;
`;

function Header() {
    return (
        <Container>
            <Logo />
        </Container>
    );
}

export default Header;