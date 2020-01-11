import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import StyledLink from '../utils/styled-link';

const Container = styled.header`
    text-align: center;
`;

const Title = styled.h1`
    font-size: 1.3rem;
    display: inline;
    font-weight: 600;

    color: rgba(0, 0, 0, 1);
`;

const Header = ({title}) => (
    <Container>
        <StyledLink to={'/'}>
            <Title>{title}</Title>
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