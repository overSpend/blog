import React, { Component } from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';

import media from '../utils/media';
import Header from './header';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');
@import url('https://fonts.googleapis.com/css?family=Oswald&display=swap');

  p{
     font-family: 'Noto Sans KR', sans-serif;
    margin: 0;
   }
 h1, h2, h3, h4, h5, h6, sub {
    font-family: 'Oswald', sans-serif;
    margin: 0;
  }
  h1 {
    font-size: 1.6rem;
  }
  h2 {
    font-size: 1.8rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
sub {
    font-size: 0.9rem;
    color: rgb(29, 29, 29, 0.95);
}
`;

const Content = styled.div``;

const Footer = styled.footer`
    display: block;
    height: 6rem;
`;

const PostContainer = styled.div`
    margin: 3rem auto;
    max-width: 728px;
    padding: 0 0.5rem;

    ${media.tablet`
    width: 80%;
  `};
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

class Layout extends Component {
    render() {
        const { children } = this.props;
        return (
            <StaticQuery
                query={graphql`
                    query SiteTitleQuery {
                        site {
                            siteMetadata {
                                title
                            }
                        }
                    }
                `}
                render={data => (
                    <PostContainer>
                        <Header title={data.site.siteMetadata.title}>
                            <ListLink to="/">Home</ListLink>
                            <ListLink to="/about/">About</ListLink>
                        </Header>
                        <Content>{children}</Content>
                        <Footer />
                        <GlobalStyles />
                    </PostContainer>
                )}
            />
        );
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;