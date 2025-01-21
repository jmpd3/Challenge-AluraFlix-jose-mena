import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LinkNav = styled(NavLink)`
  cursor: url(/assets/mano.png), pointer;
  &.active button {
    background: #000000e5;
    border: 0.125rem solid #2271d1;
    color: #2271d1;
    
  }
    
`;

export const Logo = styled.img`
  height: 2.5rem; /* Reduced height for smaller screens */
  margin-right: 1rem; /* Reduced margin for smaller screens */
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.5rem; /* Reduced padding for smaller screens */
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 768px) {
    padding: 0.5rem 1rem; /* Further reduced padding for mobile devices */
  }
`;

export const NavContainer = styled.div`
  width: 300px; /* Reduced width for smaller screens */
  display: flex;
  align-items: center;
  justify-content: center;
`;
