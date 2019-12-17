import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';

const Container = styled.div`margin-top: 10vh;`;

const TextContainer = styled.div``;

const Name = styled.h3`
    display: block;
    color: rgb(29, 29, 29, 1);
`;

const TagLine = styled.sub`
    display: inline-block;
    font-weight: bolder;
    color: rgb(29, 29, 29, 1);
`;

const Bio = () => (
    <StaticQuery
        query={bioQuery}
        render={data => {
            const { author, authorTagline } = data.site.siteMetadata;
            return (
                <Container>
                    <TextContainer>
                        <Name>{author}</Name>
                        <TagLine>{authorTagline}</TagLine>
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