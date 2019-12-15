import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledLink from '../utils/styled-link';

const Container = styled.header`
`;

const Title = styled.h1`
    display: inline;
    color: rgb(29, 29, 29, 0.95);
    letter-spacing: 0.1rem;
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