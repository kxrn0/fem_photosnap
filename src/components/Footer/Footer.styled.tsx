import styled from "styled-components";

const SCFooter = styled.footer`
  background-color: rgb(var(--black));
  display: flex;
  justify-content: space-between;
  padding: 65px 165px;

  .links {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    column-gap: 125px;

    .logo {
      grid-column: 1 / 2;
      grid-row: 1 / 2;

      .name {
        fill: rgb(var(--white));
      }
    }

    .socials {
      grid-column: 1 / 2;
      grid-row: 2 / 3;
      align-self: end;
      display: flex;
      gap: 15px;

      svg:not(:hover) {
        path {
          fill: rgb(var(--white));
        }
      }

      @media screen and (max-width: 800px) {
        order: 3;
        align-self: auto;
      }

      @media screen and (max-width: 680px) {
        order: 2;
        margin-top: 32px;
      }
    }

    .local-links {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
      display: flex;
      flex-direction: column;
      gap: 20px;

      a {
        color: rgb(var(--white));
        text-decoration: none;

        @media (hover: hover) {
          transition: opacity 0.33s;

          &:hover {
            opacity: 0.3;
          }
        }
      }

      @media screen and (max-width: 800px) {
        order: 2;
        margin: 32px 0 72px 0;
        flex-direction: row;
        gap: 26px;
      }

      @media screen and (max-width: 680px) {
        order: 3;
        margin: 50px 0 120px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
      }
    }

    @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
    }
  }

  .legal {
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: space-between;

    .fs-body-1 {
      color: rgb(var(--white), 0.5);
    }

    @media screen and (max-width: 680px) {
      align-items: center;
      gap: 35px;
    }
  }

  @media screen and (max-width: 1100px) {
    padding: 65px 40px;
  }

  @media screen and (max-width: 680px) {
    flex-direction: column;
    align-items: center;
    padding: 56px 32px;
  }
`;

export default SCFooter;
