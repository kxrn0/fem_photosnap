import styled from "styled-components";

const SCHome = styled.div`
  background-color: rgb(var(--black));
  color: rgb(var(--white));

  .hero {
    display: flex;

    .content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding: 0 110px;
      position: relative;

      &::after {
        content: "";
        background-image: var(--main-accent);
        position: absolute;
        width: 6px;
        height: 45%;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        z-index: 1;

        @media screen and (max-width: 700px) {
          width: 130px;
          height: 6px;
          top: 0;
          left: 35px;
        }
      }

      .fs-h1,
      .fs-body-1 {
        max-width: 390px;
      }

      .fs-body-1 {
        margin: 20px 0 50px 0;
        opacity: 0.6;

        @media screen and (max-width: 700px) {
          margin: 15px 0 25px 0;
        }
      }

      @media screen and (max-width: 1430px) {
        padding: 0 55px;
      }

      @media screen and (max-width: 700px) {
        padding: 75px 25px;
      }
    }

    img {
      width: 100%;
      height: 100%;

      @media screen and (max-width: 700px) {
        width: 100%;
      }
    }

    @media screen and (max-width: 700px) {
      flex-direction: column-reverse;
    }
  }

  .stories {
    display: flex;

    @media screen and (max-width: 1000px) {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
    }

    @media screen and (max-width: 450px) {
      display: flex;
      flex-direction: column;
    }
  }

  .selling-points {
    background-color: rgb(var(--white));
    color: rgb(var(--black));
    display: flex;
    justify-content: space-between;
    padding: 120px 165px;

    @media screen and (max-width: 1400px) {
      padding: 120px 75px;
    }

    @media screen and (max-width: 1250px) {
      flex-direction: column;
      gap: 80px;
      padding: 120px 155px;
    }

    @media screen and (max-width: 550px) {
      gap: 55px;
      padding: 80px 30px;
    }
  }
`;

export default SCHome;
