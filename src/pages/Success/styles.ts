import styled from "styled-components";

export const SuccessContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 75px;

  h1 {
    font-size: 32px;
    font-family: 'Baloo 2', cursive;
    color: ${(props) => props.theme['yellow-dark']};
    margin-top: 15px;
  }

  p {
    line-height: 26px;
    font-weight: 400;
    font-size: 20px;
  }

  .order {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 102px;
  }

  .order-details {
    margin-top: 50px;
    padding: 40px;
    border: 1px solid rgba(128, 71, 248, 1);
    border-radius: 6px 36px 
  }

  .order-container {
    display: flex;
    flex-direction: column;
    gap: 10px;

    p {
      font-size: 16px;
      line-height: 20.8px;
      color: ${(props) => props.theme['base-text']};
    }

    div {
      display: flex;
      flex-direction: row;
      margin-left: 10px; 
      font-size: 16px;

      div:nth-child(2){
      display: flex;
      flex-direction: column;
    }
    }



    
  }
`