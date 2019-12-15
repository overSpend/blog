import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';

const Container = styled.div`
    margin: 5rem auto;
    max-width: 728px;
    padding: 0 0.5rem;
`;

const Title = styled.h1`
    margin-bottom: 0.7rem;
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.8);
`;

const Header = styled.header``;

export default () => (
    <Layout>
        <Container>
            <Header>
                <Title>About Me</Title>
            </Header>
        </Container>
    </Layout>
);