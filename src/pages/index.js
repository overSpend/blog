import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import styled from 'styled-components';

import Bio from '../components/bio';
import Post from '../components/post';

const Title = styled.h3`
    font-weight: 800;
    margin-top: 7vh;
    color: rgba(0, 0, 0, 0.8);
`;

export default ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    return (
        <Layout>
            <Bio />
            <Title>Latest Posts</Title>
            {posts.map(({ node }) => {
                return <Post key={node.id} node={node} />;
            })}
        </Layout>
    );
};

export const query = graphql`
    query {
        allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                    }
                    fields {
                        slug
                        readingTime {
                            text
                        }
                    }
                    excerpt
                }
            }
        }
    }
`;