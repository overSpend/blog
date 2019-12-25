import React from 'react';
import { graphql } from 'gatsby';

import SEO from '../components/seo';
import Layout from '../components/layout';
import { Container, Title, Header } from './post-styles';

class BlogPostTemplate extends React.Component {
    render() {
        const post = this.props.data.markdownRemark;
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title={post.frontmatter.title} description={post.excerpt} />
                <Container>
                    <Header>
                        <Title>{post.frontmatter.title}</Title>
                        <sub
                            css={`
                          color: rgba(0,0,0,0.8);
                              `}
                        >
                            <span>Posted on {post.frontmatter.date}</span>
                            <span>&nbsp; - &nbsp;</span>
                            <span>{post.fields.readingTime.text}</span>
                        </sub>
                    </Header>
                    <div
                        css={`
                          margin: 5rem 0;
                        `}
                        dangerouslySetInnerHTML={{ __html: post.html }}
                    />
                </Container>
            </Layout>
        );
    }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
    query BlogPostBySlug($slug: String!) {
        site {
            siteMetadata {
                title
                author
            }
        }
        markdownRemark(fields: { slug: { eq: $slug } }) {
            id
            excerpt
            html
            fields {
                readingTime {
                    text
                }
            }
            frontmatter {
                title
                date(formatString: "MMMM DD, YYYY")
            }
        }
    }
`;