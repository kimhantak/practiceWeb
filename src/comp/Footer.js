import React from 'react';
import styled from 'styled-components';

const Detail = styled.footer`
    display: flex;
    border-top: 5px dotted white;
    min-width: 220px;
    padding: 10px;
    width: 80%;
    letter-spacing: 1.5px;
`;

const Text = styled.h3`
    color: white;
    font-size: 13px;
`;

const Link = styled.a`
    color: white;
    font-size: 1.1rem;
`;

export function Footer() {
    return (
        <Detail>
            <Text>Kimhantak page. <Link href="github.com/kimhantak">Github</Link></Text>
        </Detail>
    );
}