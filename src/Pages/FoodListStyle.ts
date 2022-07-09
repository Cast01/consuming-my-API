import styled from "styled-components";

interface FoodListProps {
  modal: boolean;
}

export const Container = styled.div`
  width: 100vw;
  min-width: 300px;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;

  .updateFormModal {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    display: ${({ modal }: FoodListProps) => (modal ? "flex" : "none")};
    justify-content: center;
    align-items: center;

    form {
      width: 300px;
      background: pink;
      padding: 15px;
      border-radius: 15px;

      .close {
        width: 100%;
        height: 25px;
        display: flex;
        justify-content: flex-end;

        .closeIcon {
          background: red;
          padding: 3px;
          border-radius: 3px;
          color: #000;
          cursor: pointer;
        }
      }

      input {
        display: block;
        margin-bottom: 20px;
        width: 100%;
      }

      button {
        position: relative;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        padding: 5px 15px;
      }
    }
  }

  header {
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: cornflowerblue;

    @media (max-width: 400px) {
      font-size: 13px;
    }
  }

  .main {
    width: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;

    h3 {
      width: 100%;
      height: 60px;
      display: flex;
      align-items: center;
      padding: 15px;
    }

    .foodListContainer {
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 30px;

      ul {
        max-width: 1100px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        background: #b7e5b7;
        padding: 15px;
        gap: 15px;
        border-radius: 30px;

        li {
          width: 150px;
          height: 150px;
          background: #ffa86b;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: baseline;
          padding: 5px;
          font-weight: 700;
          border-radius: 10px;

          .actions {
            width: 90%;
            display: flex;
            justify-content: space-between;
            align-self: center;

            .pencil {
              background: #ff5722;
              border-radius: 50%;
              color: white;
              padding: 3px;
              cursor: pointer;
            }

            .trash {
              background: red;
              border-radius: 50%;
              color: white;
              padding: 3px;
              cursor: pointer;
            }
          }
        }
      }
    }

    .buttonContainer {
      width: 100%;
      height: 65px;
      display: flex;
      justify-content: center;
      align-items: center;

      #button {
        padding: 10px 30px;
        cursor: pointer;
        background: #00a905;
        border-radius: 5px;
        text-decoration: none;
        font-weight: 700;
        color: #000;
      }
    }
  }
`;
