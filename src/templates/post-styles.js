import styled from 'styled-components';
import media from '../utils/media';

export const Container = styled.article`
    margin: 5rem auto;
    max-width: 42rem;
    padding: 0 0.5rem;

    ${media.mobile`
    margin-top: 4rem;
  `};
`;

export const Header = styled.header`
    ${media.mobile`
    text-align: center;
  `};
`;

export const Title = styled.h1`
    margin-bottom: 0.7rem;
    font-size: 2rem;
    color: rgba(0, 0, 0, 0.9);
`;

export const Section = styled.section``;