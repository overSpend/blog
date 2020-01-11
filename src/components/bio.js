import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import media from '../utils/media';
import StyledLink from '../utils/styled-link';

const Container = styled.div`
    margin-top: 4.5rem;

    ${media.mobile`
    flex-direction: column;
    text-align: center;
    margin-top: 5.5vh;
  `};
`;

const Name = styled.h3`
    display: block;
    color: rgb(29, 29, 29, 1);
`;

const TagLine = styled.h4`
    display: inline-block;
    margin-top: 0.8rem;

    color: #48a3f3;
    font-size: 0.9rem;
    font-weight: bolder;
    text-decoration: underline;
`;

const TextContainer = styled.div``;

const Bio = () => (
    <StaticQuery
        query={bioQuery}
        render={data => {
            const { author, authorTagline } = data.site.siteMetadata;
            return (
                <Container>
                    <TextContainer>
                        <Name>{author}</Name>
                        <StyledLink to={'/about'}>
                            <TagLine>{authorTagline}</TagLine>
                        </StyledLink>
                    </TextContainer>
                </Container>
            );
        }}
    />
);

const bioQuery = graphql`
    query {
        site {
            siteMetadata {
                author
                authorTagline
            }
        }
    }
`;

export default Bio;