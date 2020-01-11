import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledLink from '../utils/styled-link';
import media from '../utils/media';

const Container = styled.div`
    ${media.mobile`
    margin: 0.5rem 0;
    padding: 0.4rem 0;
  `};
`;

const Excerpt = styled.p`
    margin-top: 1rem;
    letter-spacing: -1px;
    color: #272525d1;
`;

const PostTitle = styled.h4`
    margin-top: 2.34rem;
    color: rgba(0, 0, 0, 0.9);
`;

const TimeSincePosted = styled.sub`
    color: rgb(29, 29, 29, 1);
`;

const Post = ({ node }) => (
    <StyledLink to={node.fields.slug}>
        <Container>
            <PostTitle>{node.frontmatter.title} </PostTitle>
            <TimeSincePosted>
                <span>on {node.frontmatter.date}</span>
                <span>&nbsp; - &nbsp;</span>
                <span>{node.fields.readingTime.text}</span>
            </TimeSincePosted>
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