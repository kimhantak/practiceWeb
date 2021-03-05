import {React} from 'react';
import styled from 'styled-components';
import Title from '../comp/title';
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
    height: 95vh;

    border: 5px solid white;
    border-radius: 3px;
`;

const Header = styled.div`
    padding: 5px;
    font-size: 25px;
    display: flex;
    align-items: center;
`;

function Home() {
    return (
        <Container>
            <Header>
                <Title src={logo} />
            </Header>
        </Container>
    );
}

export default Home;