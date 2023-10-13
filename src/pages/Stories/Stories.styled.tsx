import styled from "styled-components";

const SCStories = styled.div`
  background-color: rgb(var(--black));

  .hero {
    position: relative;
    width: 100%;

    img {
      width: 100%;
    }

    .content {
      color: rgb(var(--white));
      position: absolute;
      top: 122px;
      left: 112px;
      max-width: 390px;

      .fs-h1 {
        margin: 24px 0 16px 0;
        max-width: 350px;
      }

      .fs-body-1 {
        opacity: 0.6;
        margin: 24px 0;
      }

      .fs-body-2 {
        display: flex;
        gap: 10px;

        .date {
          opacity: 0.75;
        }
      }

      @media screen and (max-width: 800px) {
        left: 40px;
      }

      @media screen and (max-width: 700px) {
        background: rgb(var(--black));
        position: static;
        max-width: 100%;
        padding: 50px 30px;
      }
    }
  }

  .stories {
    background-color: rgb(var(--white));
    display: grid;
    grid-template-columns: auto auto auto auto;
    grid-template-rows: auto auto auto auto;

    @media screen and (max-width: 1000px) {
      grid-template-columns: auto auto;
      grid-template-rows: repeat(8, auto);
    }

    @media screen and (max-width: 650px) {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default SCStories;
