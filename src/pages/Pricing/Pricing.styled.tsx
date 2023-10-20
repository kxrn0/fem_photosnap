import styled from "styled-components";

const SCPricing = styled.div`
  .rate {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    padding: 120px 0 160px 0;

    .prices {
      display: flex;
      align-items: center;
      gap: 30px;

      @media screen and (max-width: 1200px) {
        flex-direction: column;
        gap: 24px;
      }
    }

    @media screen and (max-width: 1200px) {
      padding: 112px 0;
    }

    @media screen and (max-width: 625px) {
      padding: 65px 0;
    }
  }

  .comparision {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 55px;
    padding-bottom: 160px;

    .fs-h1 {
      @media screen and (max-width: 625px) {
        display: none;
      }
    }

    .table {
      width: 730px;

      .row {
        display: flex;
        justify-content: space-between;
        padding: 24px;
        border-bottom: 1px solid rgb(var(--light-gray));

        &:first-of-type {
          border-color: rgb(var(--black));
        }

        .points {
          display: flex;

          .item {
            display: grid;
            place-items: center;
            text-align: center;
            width: 140px;

            @media screen and (max-width: 750px) {
              width: 80px;
            }

            @media screen and (max-width: 625px) {
              width: 16px;
            }
          }

          .point {
            height: 16px;
            position: relative;

            input[type="checkbox"] {
              appearance: none;
              position: absolute;
              inset: 0;
            }

            .fs-h4 {
              display: none;
              opacity: 0.5;

              @media screen and (max-width: 625px) {
                display: block;
              }
            }

            @media screen and (max-width: 625px) {
              display: flex;
              flex-direction: column;
              gap: 8px;
            }
          }

          @media screen and (max-width: 625px) {
            justify-content: space-between;
          }
        }

        @media screen and (max-width: 625px) {
          flex-direction: column;
          gap: 17px;

          &:first-of-type {
            .points {
              display: none;
            }
          }
        }
      }

      @media screen and (max-width: 750px) {
        width: 600px;
      }

      @media screen and (max-width: 625px) {
        width: 85%;
      }
    }

    @media screen and (max-width: 1000px) {
      padding-bottom: 112px;
    }

    @media screen and (max-width: 625px) {
      padding-bottom: 65px;
    }
  }
`;

export default SCPricing;
