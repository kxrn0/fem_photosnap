import styled from "styled-components";

const SCFeatures = styled.div`
  .selling-points {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    row-gap: 105px;
    column-gap: 30px;
    padding: 160px 165px;

    @media screen and (max-width: 1300px) {
      padding: 100px 80px;
    }

    @media screen and (max-width: 1100px) {
      grid-template-columns: 1fr 1fr;
      padding: 110px 40px;
    }

    @media screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
      gap: 55px;
      padding: 65px 35px;
    }
  }
`;

export default SCFeatures;
