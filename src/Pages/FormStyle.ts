import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: white;
  display: flex;
  flex-direction: column;

  header {
    width: 100%;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: cornflowerblue;
  }

  .formContainer {
    width: 100%;
    flex: 1;
    background: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  form {
    width: 300px;
    background: pink;
    padding: 15px;
    border-radius: 15px;

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
`;
