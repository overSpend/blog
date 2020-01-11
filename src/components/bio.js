import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

import media from '../utils/media';
import StyledLink from '../utils/styled-link';

const Container = styled.div`
    margin-top: 10vh;

    ${media.mobile`
    flex-direction: column;
    text-align: center;
    margin-top: 8vh;
  `};
`;

const Name = styled.h3`
    display: block;
    color: rgb(29, 29, 29, 1);
`;

const TagLine = styled.h4`
    display: inline-block;
    margin-top: 1.5vh;

    color: #f73b3bdb;
    font-size: 0.9rem;
    font-weight: bolder;
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
                            <TagLine>{authorTagline}✔</TagLine>
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