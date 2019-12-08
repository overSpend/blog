import React from 'react';
import { css } from '@emotion/core';
import { useStaticQuery, Link, graphql } from 'gatsby';
import { rhythm } from "../utils/typography"

const ListLink = props => (
    <li
        css={css`
            display: inline-block;
            margin-left: 1rem;
        `}
    >
        <Link to={props.to}>{props.children}</Link>
    </li>
);

export default ({ children }) =>
    {
     const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
        <div
            css={css`
                margin: 3rem auto;
                max-width: 650px;
                padding: 0 ${rhythm(1)};
            `}
        >
            <header css={css`margin-bottom: ${rhythm(1.5)};`}>
                <Link
                    to="/"
                    css={css`
                        text-shadow: none;
                        background-image: none;
                    `}
                >
                    <h3 css={css`display: inline;`}>{data.site.siteMetadata.title}</h3>
                </Link>
                <ul
                    css={css`
                        list-style: none;
                        float: right;
                    `}
                >
                    <ListLink to="/">Home</ListLink>
                    <ListLink to="/about/">About</ListLink>
                    <ListLink to="/contact/">Contact</ListLink>
                </ul>
            </header>
            {children}
        </div>
      )
}