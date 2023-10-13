import styled from "styled-components";

const SCSection = styled.section`
  background-color: rgb(var(--white));
  color: rgb(var(--black));
  display: flex;

  &.reverse {
    flex-direction: row-reverse;

    @media screen and (max-width: 700px) {
      flex-direction: column-reverse;
    }
  }

  .content {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0 110px;

    &.reverse {
      align-items: flex-end;

      @media screen and (max-width: 700px) {
        align-items: flex-start;
      }
    }

    .fs-h1,
    .fs-body-1 {
      max-width: 390px;
    }

    .fs-h4.reverse {
      width: 390px;

      @media screen and (max-width: 700px) {
        width: auto;
      }
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
`;

export default SCSection;
