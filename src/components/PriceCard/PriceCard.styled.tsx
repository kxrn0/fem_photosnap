import styled from "styled-components";

const SCPriceCard = styled.div`
  background-color: rgb(var(--impure-white));
  color: rgb(var(--black));
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 40px;
  padding-top: 55px;
  width: fit-content;
  text-align: center;

  &.pro {
    background-color: rgb(var(--black));
    color: rgb(var(--white));
    padding: 90px 40px 70px 40px;
    position: relative;

    &::before {
      content: "";
      background-image: var(--main-accent);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 6px;

      @media screen and (max-width: 1200px) {
        width: 6px;
        height: 100%;
      }

      @media screen and (max-width: 600px) {
        width: 100%;
        height: 6px;
      }
    }

    @media screen and (max-width: 1200px) {
      padding: 40px;
    }

    @media screen and (max-width: 600px) {
      padding: 50px 35px;
    }
  }

  .name {
    display: flex;
    flex-direction: column;
    gap: 18px;

    .fs-body-1 {
      max-width: 270px;
      opacity: 0.6;
    }

    @media screen and (max-width: 1200px) {
      grid-row: 1 / 2;
      grid-column: 1 / 2;
    }
  }

  .price-container {
    .fs-body-1 {
      opacity: 0.6;

      @media screen and (max-width: 1200px) {
        text-align: end;
      }

      @media screen and (max-width: 600px) {
        text-align: center;
      }
    }

    @media screen and (max-width: 1200px) {
      grid-row: 1 / 2;
      grid-column: 2 / 3;
    }
  }

  @media screen and (max-width: 1200px) {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
    text-align: start;
    width: 100%;
    column-gap: 180px;
  }

  @media screen and (max-width: 735px) {
    column-gap: 50px;
  }

  @media screen and (max-width: 600px) {
    display: flex;
    text-align: center;
    padding: 40px 35px;
    padding-top: 55px;
  }
`;

export default SCPriceCard;
