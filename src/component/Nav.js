import styled from "styled-components";
import namelogo from "../img/namelogo.png";

const Nav = () => {
  return (
    <StyledNav>
      <Logo src={namelogo} alt="Logo" />

      <UnList>
        <li>Explore</li>
        <li>Pitch</li>
        <li>Find Start Ups</li>
        <li>Sign In</li>
        <li>
          <span>Join</span>
        </li>
      </UnList>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  display: flex;
  width: 90%;
  /* padding: 1rem 0; */
  min-height: 10vh;
  margin: 1rem 5rem;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 48px;
  width: 152px;
  object-fit: contain;
`;

const UnList = styled.ul`
  display: flex;
  list-style-type: none;

  li {
    margin: 0 1rem;
    padding: 0 1rem;
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 29px;
    color: #4c3c81;
    cursor: pointer;
    transition: all 0.5s ease;
    &:hover {
      font-weight: 700;
    }
  }

  span {
    border: 1px solid #a191d6;
    border-radius: 0.3rem;
    padding: 0.5rem 1rem;
    font-weight: 700;
    &:hover {
      background-color: #4c3c81;
      color: white;
    }
  }
`;

export default Nav;
