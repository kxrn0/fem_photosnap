import styled from "styled-components";

const SCSellingPoint = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  .icon-container {
    width: 72px;
    height: 72px;
    display: grid;
    place-items: center;
  }

  .fs-h3 {
    margin: 50px 0 15px 0;
  }

  .fs-body-1 {
    max-width: 350px;
    opacity: 0.6;
  }
`;

export default SCSellingPoint;
