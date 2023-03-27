// Images
import Bankrate from "../img/Bankrate.png";
import FoundersFund from "../img/FoundersFund.png";
import FundingCircle from "../img/FundingCircle .png";
import Google from "../img/Google.png";
import InvestDetroit from "../img/InvestDetroit.png";
import Microsoft from "../img/Microsoft.png";

import styled from "styled-components";

const Companies = () => {
  return (
    <Partners>
      <Companys>
        <li>
          <span>Trusted By:</span>
        </li>
        <li>
          <img src={InvestDetroit} alt="Invest" />
        </li>
        <li>
          <img src={Microsoft} alt="Micro" />
        </li>
        <li>
          <img src={Google} alt="Goggle" />
        </li>
        <li>
          <img src={Bankrate} alt="Bank" />
        </li>
        <li>
          <img src={FundingCircle} alt="Fund" />
        </li>
        <li>
          <img src={FoundersFund} alt="Founder" />
        </li>
      </Companys>
    </Partners>
  );
};

const Partners = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 3rem 1rem;
`;

const Companys = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0rem 0rem;

    span {
      font-size: 1.5rem;
      font-weight: 500;
      color: #4c3c81;
    }

    img {
      width: 80%;
    }
  }
`;

export default Companies;
