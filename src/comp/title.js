import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Style = styled(Link)`
    text-decoration: none;
    color: white;

    display: inline-block;
    vertical-align: middle;
`;

const Icon = styled.img`
    height: 100px;

    @media screen and (max-width: 1200px) {
        height: 80px;
    }
`;

function Title(props) {
    return (
        <Style to="/">
            <Icon src={props.src} alt="no" />
        </Style>
    );
}

export default Title;