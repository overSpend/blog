import React from 'react';
import Layout from '../components/layout';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { css } from '@emotion/core';


const Mail = styled.p``;

const Header = styled.header``;

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

export default () => (
    <Layout>
        <Container>
            <Header>
                <Title>Contact</Title>
            </Header>
            <Mail>
                <Link
                    css={css`
                        color: rgba(0, 0, 0, 0.8);
                    `}
                    href="mailto:devantalian72@gmail.com"
                >
                    devantalian72@gmail.com
                </Link>
            </Mail>
        </Container>
    </Layout>
);