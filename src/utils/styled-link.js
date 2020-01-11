import styled from 'styled-components';
import {Link} from 'gatsby';

const StyledLink = styled(Link)`
    text-shadow: none;
    background-image: none;
    text-decoration: none;
`;

export default StyledLink;

// <Link to={node.fields.slug}
//       css={css`
//          text-decoration: none;
//          font-size: 16px;
//          color: inherit;
// `}>