import styled from "styled-components";
import man from "../img/man.jpg";
import Union from "../img/Union.png";
import Union2 from "../img/Union2.png";

const SearchSection = () => {
  return (
    <Section>
      <Left>
        <h1>Discover and Invest in Quality Businesses in Nigeria.</h1>

        <div>
          <Search>
            <input type="text" />
            <button type="submit">Search</button>
          </Search>

          <Suggest>
            <span>Popular:</span>
            <ul>
              <li>Agriculture</li>
              <li>Art</li>
              <li>Fintech</li>
              <li>Food</li>
            </ul>
          </Suggest>
        </div>
      </Left>

      <Right>
          <img className="dot dot1" src={Union} alt="3 purple dots" />
          <img className="dot dot2" src={Union2} alt="3 purple dotss" />
          
        <Img>
          <img className="man" src={man} alt="Man holding paper" />
        </Img>
      </Right>
    </Section>
  );
};

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 5rem;
`;

const Left = styled.div`
  width: 50%;

  h1 {
    width: 90%;
    line-height: 3rem;
    padding-bottom: 3rem;
  }
`;

const Search = styled.form`
  display: flex;
  padding-bottom: 0.5rem;
  input {
    width: 100%;
    height: 2.5rem;
    font-size: 1.5rem;
    padding: 0 .5rem;
  }

  button {
    font-size: 20px;
    width: 8rem;
    height: 2.5rem;
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    cursor: pointer;
    color: white;
    background-color: #4c3c81;
    border: #4c3c81;
  }
`;

const Suggest = styled.div`
  display: flex;
  align-items: center;
  margin: 1rem 0;

  span {
    font-size: 20px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    color: #4c3c81;
  }

  ul {
    display: flex;
    align-items: center;
  }

  li {
    border: 1px solid #a191d6;
    border-radius: 0.3rem;
    padding: 0.2rem 1rem;
    &:hover {
      background-color: #4c3c81;
      color: white;
    }
  }
`;

const Right = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 1px solid black; */

  img.dot1,
  img.dot2 {
    position: absolute;
    width: 5.2%;
    z-index: 1;
  }

  img.dot1{
    top: 20%;
    left: 6%;
  }

  img.dot2{
    top: 15%;
    left: -8%;
  }
`;

const Img = styled.div`
  /* position: relative; */
  overflow: hidden;
  height: 70vh;
  border-top-left-radius: 6rem;
  border-bottom-left-radius: 6rem;
  border-top-right-radius: 6rem;

  img.man {
    height: 70vh;
    width: 100%;
    object-fit: contain;
  }
`;

export default SearchSection;
