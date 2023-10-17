import styled from "styled-components";

const SCPseudoFooter = styled.div`
  position: relative;
  background-color: rgb(var(--black));

  img {
    width: 100%;
  }

  .content {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 165px;

    .fs-h1 {
      color: rgb(var(--white));
      max-width: 400px;
    }

    @media screen and (max-width: 1000px) {
      padding: 0 40px;
    }

    @media screen and (max-width: 700px) {
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 25px;
      padding: 0 30px;
    }
  }

  &::before {
    content: "";
    background-image: var(--main-accent);
    width: 6px;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    @media screen and (max-width: 700px) {
      width: 130px;
      height: 6px;
      top: 0;
      left: 35px;
    }
  }
`;

export default SCPseudoFooter;
