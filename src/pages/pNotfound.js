import {React} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Div = styled.div`
    color: white;
    font-size: 20px;
    padding: 10px;
`;

const Prev = styled(Link)`
    padding-left: 30px;
    color: white;
`;


function NotFound() {
    return (
        <Div>
            <h1>페이지를 찾을 수 없다.</h1>
            <Prev to="/">홈으로 돌아가기</Prev>
        </Div>
    );
}

export default NotFound;