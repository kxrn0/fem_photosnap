import styled from "styled-components";

const SCNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 16px 165px;

  .menu-toggle {
    display: none;

    @media screen and (max-width: 730px) {
      display: block;
    }
  }

  .links {
    .local-links {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      gap: 37px;

      .fs-h4 {
        color: rgb(var(--black));
        text-decoration: none;
        transition: opacity 0.33s;

        @media (hover: hover) {
          &:hover {
            opacity: 0.3;
          }
        }
      }

      @media screen and (max-width: 730px) {
        position: relative;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        top: 0;
        left: 0;
        transform: translate(0, 0);
        width: 100%;
        background-color: yellow;

        &::after {
          content: "";
          background-color: rgb(var(--black));
          width: 100%;
          /* width: 310px; */
          height: 1px;
        }
      }
    }

    @media screen and (max-width: 730px) {
      background-color: rgb(var(--white));
      /* background-color: yellow; */
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
      padding: 32px;
      z-index: 1;

      .button-primary {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 1100px) {
    padding: 16px 40px;
  }

  @media screen and (max-width: 730px) {
    padding: 28px 24px;
    position: relative;
  }
`;

export default SCNavbar;
