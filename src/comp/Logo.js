import { useContext } from "react";
import { IconContext } from '../pages/pHome';
import styled from 'styled-components';

const Image = styled.img`
    height: 100px;
    @media screen and (max-width: 1200px) {
        height: 65px;
    }
`;

export default function Logo() {
    const context = useContext(IconContext)
    return (
        <Image src={context} />
    );
}