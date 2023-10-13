import styled from "styled-components";

const SCCard = styled.div`
  position: relative;
  background-color: red;
  width: 100%;
  transition: transform 0.33s;

  img {
    width: 100%;
    height: 100%;
  }

  .content {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0.27%,
      rgba(0, 0, 0, 0.66) 100%
    );
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 70%;

    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: end;
    align-items: center;
    padding: 40px;

    .details,
    .button-secondary {
      display: flex;
      width: 100%;
    }

    .details {
      flex-direction: column;
      gap: 4px;
      padding-bottom: 15px;
      position: relative;

      &::after {
        content: "";
        background-color: rgb(var(--white), 0.25);
        width: 100%;
        height: 1px;
        position: absolute;
        top: 100%;
        left: 0;
      }
    }

    .button-secondary {
      justify-content: space-between;
    }
  }

  &::after {
    content: "";
    background-image: var(--main-accent);
    width: 100%;
    height: 6px;
    position: absolute;
    top: 100%;
    left: 0;
    opacity: 0;
    transition: opacity 0.33s;
  }

  @media (hover: hover) {
    &:hover {
      transform: translateY(-25px);

      &::after {
        opacity: 1;
      }
    }
  }
`;

export default SCCard;
