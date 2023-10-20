import styled from "styled-components";

const SCApp = styled.div`
  --main-accent: linear-gradient(
    27deg,
    #ffc593 0%,
    #bc7198 43.29%,
    #5a77ff 83.33%
  );
  --black: 0, 0, 0;
  --light-gray: 223, 223, 223;
  --white: 255, 255, 255;
  --impure-white: 245, 245, 245;

  background: rgb(var(--white));
  min-height: 100vh;

  .fs-h1,
  .fs-h2,
  .fs-h3,
  .fs-h4,
  .fs-body-1,
  .fs-body-2 {
    font-family: demonic-sans;
  }

  .fs-h1,
  .fs-h2,
  .fs-h3,
  .fs-h4 {
    font-weight: 700;
  }

  .fs-h1,
  .fs-h4 {
    text-transform: uppercase;
  }

  .fs-body-1,
  .fs-body-2 {
    font-weight: 400;
  }

  .fs-body-1 {
    font-size: 15px;
    line-height: 25px;
  }

  .fs-body-2 {
    font-size: 13px;
  }

  .fs-h1 {
    font-size: 40px;
    line-height: 48px;
    letter-spacing: 4px;

    @media screen and (max-width: 700px) {
      &.scaled {
        font-size: 32px;
        line-height: 40px;
        letter-spacing: 3px;
      }
    }
  }

  .fs-h2 {
    font-size: 24px;
    line-height: 25px;
  }

  .fs-h3 {
    font-size: 18px;
    line-height: 25px;
  }

  .fs-h4 {
    font-size: 12px;
    letter-spacing: 2px;
  }

  .button-primary,
  .button-secondary {
    text-decoration: none;
    text-align: center;
    display: block;
  }

  .button-primary {
    padding: 12px 24px;
    transition: background-color 0.33s, color 0.33s;
    max-width: 325px;

    &.black {
      background-color: rgb(var(--black));
      color: rgb(var(--white));

      @media (hover: hover) {
        &:hover {
          background-color: rgb(var(--light-gray));
          color: rgb(var(--black));
        }
      }
    }

    &.white {
      background-color: rgb(var(--white));
      color: rgb(var(--black));

      @media (hover: hover) {
        &:hover {
          background-color: rgb(var(--light-gray));
        }
      }
    }
  }

  .button-secondary {
    display: flex;
    gap: 16px;

    @media (hover: hover) {
      &:hover {
        span::after {
          opacity: 1;
        }
      }

      span {
        position: relative;

        &::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 1px;
          opacity: 0;
          transition: opacity 0.33s;
        }
      }
    }

    &.black {
      color: rgb(var(--black));

      @media (hover: hover) {
        span::after {
          background: rgb(var(--black));
        }
      }

      g {
        stroke: rgb(var(--black));
      }
    }

    &.white {
      color: rgb(var(--white));

      @media (hover: hover) {
        span::after {
          background: rgb(var(--white));
        }
      }

      g {
        stroke: rgb(var(--white));
      }
    }
  }
`;

export default SCApp;
