import React from 'react';
import styled from 'styled-components';
import Layout from '../components/layout';
import { css } from '@emotion/core';

const Page = styled.div``;

const Header = styled.header``;

const Box = styled.div`margin-bottom: 1.3rem;`;

const TextBox = styled.p`margin-bottom: 1.1rem;`;

const Container = styled.div`
    margin: 4rem auto;
    max-width: 728px;
    padding: 0 0.5rem;
`;

const Title = styled.h1`
    color: rgba(0, 0, 0, 0.9);
    font-size: 1.8rem;
    margin-bottom: 0.2rem;
`;

const PageTitle = styled.h1`
    letter-spacing: 0.05rem;
    margin-bottom: 0.7rem;
    color: rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const SubTitle = styled.h2`
    letter-spacing: 0.05rem;
    margin-bottom: 0.7rem;
    color: rgba(0, 0, 0, 0.8);
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
`;

const ALink = styled.a`
    display: inline-block;
    margin-left: 1rem;
    font-size: 1.1rem;
    color: #48a3f3;
`;

export default () => (
    <Layout>
        <Container>
            <Header>
                <PageTitle>About Me</PageTitle>
            </Header>

            <Page>
                <Box className="page-header">
                    <Title>과소비( 홍종석 )</Title>
                    <Box>
                        <TextBox>
                            상상을 현실로 만들 수 있는 개발자를 꿈꾸는 프론트엔드 엔지니어입니다. 기계와 개발에 관련된 이야기를 좋아하며, 제가 가진 정보와
                            서비스가 타인에게 도움이 되는것을 보며 행복을 느낍니다.
                        </TextBox>
                    </Box>
                </Box>
                <Box className="skill">
                    <SubTitle>Skills</SubTitle>
                    <TextBox>
                        <strong>Languages:&nbsp;</strong>Javascript, Python
                    </TextBox>
                    <TextBox>
                        <strong>Frontend:&nbsp;</strong>React, React-Native
                    </TextBox>
                    <TextBox>
                        <strong>Backend:&nbsp;</strong>Node.js(with Express.js), Django, MySQL, Socket.io
                    </TextBox>
                    <TextBox>
                        <strong>Etc:&nbsp;</strong>Git, Github, Slack, Notion
                    </TextBox>
                </Box>
                <Box className="project">
                    <SubTitle>Projects</SubTitle>
                    <TextBox>
                        <strong css={css`font-size: 1.1rem;`}>개인 블로그&nbsp;</strong>
                        <TextBox css={css`margin-bottom: 0.3rem;`}>
                            <strong>Page Link:&nbsp;</strong>
                            <ALink href="https://overspend.netlify.com">
                                overspend.netlify.com
                            </ALink>
                        </TextBox>
                        개인 블로그를 운영해보고자 제작했습니다. 공부를 하며 배운 내용이나 경험한 내용을 공유합니다. 블로그는 Gatsby.js와
                        Netlify를 이용해 제작했습니다.
                    </TextBox>
                </Box>
            </Page>
        </Container>
    </Layout>
);