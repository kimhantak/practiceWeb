import React from 'react';
import styled from 'styled-components';

const Detail = styled.footer`
    border-top: 5px dotted white;
    min-width: 220px;
    padding: 10px;
    width: 80%;
`;

const Text = styled.h3`
    color: white;
    font-size: 13px;
`;

const Link = styled.a`
    text-decoration: none;
`;

export function Footer() {
    return (
        <Detail>
            <Text>Kimhantak page. Github: <Link href="github.com/kimhantak">Link</Link></Text>
        </Detail>
    );
}