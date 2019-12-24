import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledLink from '../utils/styled-link';
import media from '../utils/media';

const Container = styled.header``;

const Title = styled.h1`
    display: inline;

    color: rgba(0, 0, 0, 1);
    letter-spacing: 0.1rem;

    ${media.tablet`
    text-align: center;
    letter-spacing: 0;
  `};
    ${media.phone`
    text-align: center;
    letter-spacing: 0;
  `};
`;

const Ul = styled.ul`
    list-style: none;
    float: right;
`;

const Header = ({ title, children }) => (
    <Container>
        <StyledLink to={'/'}>
            <Title>{title}</Title>
            <Ul>{children}</Ul>
        </StyledLink>
    </Container>
);

Header.defaultProps = {
    title: ''
};

Header.propTypes = {
    title: PropTypes.string
};

export default Header;