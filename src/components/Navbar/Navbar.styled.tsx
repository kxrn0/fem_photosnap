import styled from "styled-components";

const SCNavbar = styled.nav`
  position: relative;

  .content {
    background-color: rgb(var(--white));
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    padding: 16px 165px;
    z-index: 2;

    svg {
      .name {
        fill: rgb(var(--black));
      }
    }

    .menu-toggle {
      display: none;

      @media screen and (max-width: 730px) {
        display: block;
        position: relative;
        width: 20px;
        height: 20px;

        &::before,
        &::after {
          content: "";
          background: black;
          width: 20px;
          height: 1px;
          position: absolute;
          left: 0;
          transition: transform 0.33s, top 0.33s, bottom 0.33s, width 0.33s;
          transform-origin: center;
        }

        &::before {
          top: 35%;
        }

        &::after {
          bottom: 35%;
        }

        &.open::before,
        &.open::after {
          width: 22px;
        }

        &.open::before {
          top: 50%;
          transform: translateY(-50%) rotate(45deg);
        }

        &.open::after {
          bottom: 50%;
          transform: translateY(-50%) rotate(-45deg);
        }

        input[type="checkbox"] {
          appearance: none;
          position: absolute;
          inset: 0;
        }
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

          &::after {
            content: "";
            background-color: rgb(var(--black), 0.25);
            width: 100%;
            height: 1px;
          }
        }
      }

      @media screen and (max-width: 730px) {
        background-color: rgb(var(--white));
        ft: 0;
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
        visibility: hidden;
        opacity: 0;

        &.shown {
          animation: show 0.33s forwards;
        }

        &.hidden {
          animation: hide 0.33s forwards;
        }

        .button-primary {
          width: 100%;
          padding: 12px 0;
        }

        @keyframes show {
          from {
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
          }

          to {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }
        }

        @keyframes hide {
          from {
            transform: translateY(0);
            opacity: 1;
            visibility: visible;
          }

          to {
            transform: translateY(-100%);
            opacity: 0;
            visibility: hidden;
          }
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
  }

  .overlay {
    background-color: rgb(var(--black));
    position: fixed;
    inset: 0;
    z-index: 1;
    transition: opacity 0.33s;

    &.shown {
      opacity: 0.5;
      pointer-events: all;
    }

    &.hidden {
      opacity: 0;
      pointer-events: none;
    }
  }
`;

export default SCNavbar;
