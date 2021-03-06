import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, keywords, title }) {
    return (
        <StaticQuery
            query={detailsQuery}
            render={data => {
                const metaDescription = description || data.site.siteMetadata.description;
                return (
                    <Helmet
                        htmlAttributes={{
                            lang
                        }}
                        title={title}
                        titleTemplate={`%s | ${data.site.siteMetadata.title}`}
                        meta={[
                            {
                                name: `author`,
                                content: data.site.siteMetadata.author
                            },
                            {
                                name: `description`,
                                content: metaDescription
                            },
                            {
                                name: `google-site-verification`,
                                content: `IZCu66WBxL-uGz0gqi_NMic_R77eZ6NiG650fLmv6QU`
                            },
                            {
                                property: `og:title`,
                                content: title
                            },
                            {
                                property: `og:description`,
                                content: metaDescription
                            },
                            {
                                property: `og:type`,
                                content: `website`
                            },
                            {
                                name: `twitter:card`,
                                content: `summary`
                            }
                        ]
                            .concat(
                                keywords.length > 0
                                    ? {
                                          name: `keywords`,
                                          content: keywords.join(`, `)
                                      }
                                    : []
                            )
                            .concat(meta)}
                    />
                );
            }}
        />
    );
}

SEO.defaultProps = {
    lang: `ko`,
    meta: [],
    keywords: []
};

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    author: PropTypes.string,
    meta: PropTypes.array,
    keywords: PropTypes.arrayOf(PropTypes.string),
    title: PropTypes.string.isRequired
};

export default SEO;

const detailsQuery = graphql`
    query DefaultSEOQuery {
        site {
            siteMetadata {
                title
                author
                description
            }
        }
    }
`;