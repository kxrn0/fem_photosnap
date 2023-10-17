import styled from "styled-components";

const SCToggle = styled.div`
  display: flex;

  label {
    color: rgb(var(--black));
    display: flex;
    flex-direction: column;
    justify-content: center;
    opacity: 0.5;
    transition: opacity 0.33s;

    &.active {
      opacity: 1;
    }

    &:first-of-type {
      padding-right: 32px;
    }

    &:last-of-type {
      padding-left: 32px;
    }
  }

  .inputs {
    border-radius: 64px;
    height: 32px;
    position: relative;
    transition: background-color 0.33s;

    &.a {
      background-color: rgb(var(--light-gray));
    }

    &.b {
      background-color: rgb(var(--black));
    }

    input[type="radio"] {
      appearance: none;
      width: 32px;
      height: 32px;

      &:first-of-type:checked {
        ~ .ball {
          background-color: rgb(var(--black));
        }
      }

      &:last-of-type:checked {
        ~ .ball {
          background-color: rgb(var(--white));
          transform: translate(35px, -50%);
        }
      }
    }

    .ball {
      position: absolute;
      width: 24px;
      height: 24px;
      border-radius: 100%;
      top: 50%;
      transform: translate(5px, -50%);
      transition: transform 0.33s, background-color 0.33s;
    }
  }
`;

export default SCToggle;
