import { useContext } from "react";
import { IconContext } from '../pages/pHome';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Image = styled.img`
    height: 100px;
    @media screen and (max-width: 1200px) {
        height: 65px;
    }
`;

const Move = styled(Link)`
    padding-left: 5px;
`;


export default function Logo() {
    const context = useContext(IconContext)
    return (
        <Move to="/">
            <Image src={context} />
        </Move>
    );
}