import styled from 'styled-components';
import travel from '../travel.svg';

const Container = styled.div`
    display: flex;
    width: 80%;
    padding: 10px;
    margin: 5px;
    color: white;
    text-align: center;
    justify-content: start;
`;

const Image = styled.img`
    height: 400px;
    @media screen and (max-width: 1000px) {
        height: 150px;
    }
`;

const Text = styled.p`
    font-size: 20px;
    text-align: left;
    padding-left: 5px;
    height: 300px;
    @media screen and (max-width: 1000px) {
        font-size: 9px;
        overflow: scroll;
    }
`;

export default function MainArticle() {
    return (
        <Container className="MainArticle">
            <Image src={travel} />
            <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </Text>
        </Container>
    );
}