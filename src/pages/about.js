import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';
import { css } from '@emotion/core';

const Page = styled.div``;

const Header = styled.header``;

const Box = styled.div`margin-bottom: 1.3rem;`;

const TextBox = styled.p`margin-bottom: 1.1rem;`;

const Container = styled.div`
    margin: 5rem auto;
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

const ListLink = props => (
    <li
        css={css`
            display: inline-block;
            margin-left: 1rem;
        `}
    >
        <Link
            css={css`
                font-family: 'Oswald', sans-serif;
                color: rgb(29, 29, 29, 1);
                font-size: 1.2rem;
            `}
            to={props.to}
        >
            {props.children}
        </Link>
    </li>
);

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
                            기계와 개발을 좋아하며 Full-Stack 개발자가 되기위해 공부하고 있습니다. 또한 현재(19.12.16) 육군으로
                            복무중입니다(~21.04.05). 기계와 개발에 관련된 이야기를 좋아하며, 제가 가진 정보가 타인에게 도움이 되는것을 좋아합니다.
                        </TextBox>
                    </Box>
                </Box>
                <Box className="skill">
                    <SubTitle>Skills</SubTitle>
                    <TextBox>
                        <strong>Programming:&nbsp;</strong>Java, Kotlin, Python
                    </TextBox>
                    <TextBox>
                        <strong>Frontend:&nbsp;</strong>Html, Css, Sass, React
                    </TextBox>
                    <TextBox>
                        <strong>Backend:&nbsp;</strong>Node.js, Django, DB(MySQL)
                    </TextBox>
                    <TextBox>
                        <strong>Etc:&nbsp;</strong>Git, Slack, Github, Notion
                    </TextBox>
                </Box>
                <Box className="project">
                    <SubTitle>Projects</SubTitle>
                    <TextBox>
                        <strong css={css`font-size: 1.1rem;`}>개인 블로그&nbsp;</strong>
                        <TextBox css={css`margin-bottom: 0.3rem;`}>
                            <strong>Page Link:&nbsp;</strong>
                            <ListLink to="https://overspend.netlify.com">
                                overspend.netlify.com
                            </ListLink>
                        </TextBox>
                        개인 블로그를 운영해보고 싶어 제작했습니다. 공부를 하며 제가 배운 내용이나 경험하게된 내용을 공유하는 블로그입니다. 블로그는
                        Gatsby.js와 Netlify를 이용해 제작했습니다.
                    </TextBox>
                </Box>
            </Page>
        </Container>
    </Layout>
);