import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import StyledLink from '../utils/styled-link';

const Container = styled.div``;

const Title = styled.h4`
    margin-top: 3vh;
    color: rgba(0, 0, 0, 0.8);
`;

const Excerpt = styled.p`
    font-weight: bolder;
    margin: 1rem 0 4rem 0;
    color: rgb(29, 29, 29, 0.95);
`;

// sub css = components/layout.js

const Post = ({ node }) => (
    <StyledLink to={node.fields.slug}>
        <Container>
            <Title>{node.frontmatter.title} </Title>
            <sub>
                <span>on {node.frontmatter.date}</span>
                <span>&nbsp; - &nbsp;</span>
                <span>{node.fields.readingTime.text}</span>
            </sub>
            <Excerpt dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </Container>
    </StyledLink>
);

Post.propTypes = {
    node: PropTypes.shape({
        id: PropTypes.string.isRequired,
        frontmatter: PropTypes.shape({
            title: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired
        }),
        fields: PropTypes.shape({
            slug: PropTypes.string.isRequired
        }),
        excerpt: PropTypes.string.isRequired
    })
};


export default Post;