import React from 'react';
import styled from 'styled-components';
import Logo from './Logo';
import {Link} from 'react-router-dom';
import list from '../list.json';

const Container = styled.div`
    display: flex;
    align-items: center;
    padding: 10px;
    justify-content: space-between;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const Links = styled.div`
    display: flex;
    width: 60%;
    flex-direction: row;
    justify-content: end;
    @media screen and (max-width: 600px) {
        flex-direction: column;
    }
`;

const Li = styled(Link)`
    color: white;
    text-align: center;
    text-decoration: none;
    width: 100%;
    padding: 4px 0;
    transition: .3s linear;
    &:hover {
        font-size: 20px;
        background-color: rgba(255, 255, 255, .5);
    }
`;

function Header() {
    return (
        <Container className="header">
            <Logo />
            <Links className="links">
                {
                    list.map((link, index) => {
                            return <Li key={index} to={link.src}>{link.name}</Li> 
                        }
                    )
                }
            </Links>
        </Container>
    );
}

export default Header;