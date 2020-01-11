import React, { Component } from 'react';
import { graphql, StaticQuery } from 'gatsby';
import styled, { createGlobalStyle } from 'styled-components';
import PropTypes from 'prop-types';

import Header from './header';

const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+KR&display=swap');

  * {
    font-family: 'Noto Sans KR', sans-serif;
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

`;

const Content = styled.main``;

const Footer = styled.footer`
    display: block;
    height: 6rem;
`;

const PostContainer = styled.div`
    margin: 3rem auto;
    max-width: 40rem;
    padding: 0 0.5rem;
`;

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
                        <Header title={data.site.siteMetadata.title}/>
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