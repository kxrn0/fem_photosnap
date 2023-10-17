import styled from "styled-components";

const SCFeatures = styled.div`
  .hero {
    display: flex;

    picture {
      background-color: black;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .content {
      flex-grow: 1;
      background-color: rgb(var(--black));
      color: rgb(var(--white));
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 175px 110px;
      position: relative;

      &::before {
        content: "";
        background-image: var(--main-accent);
        width: 6px;
        height: 30%;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);

        @media screen and (max-width: 700px) {
          width: 130px;
          height: 6px;
          top: 0;
          left: 30px;
        }
      }

      .fs-body-1 {
        opacity: 0.6;
        max-width: 390px;
      }

      @media screen and (max-width: 1400px) {
        padding: 175px 55px;
      }

      @media screen and (max-width: 700px) {
        padding: 70px 30px;
      }
    }

    @media screen and (max-width: 700px) {
      flex-direction: column-reverse;
      gap: 0;
    }
  }

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
