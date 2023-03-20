import styled from "styled-components";

export const  CheckOutContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  width:640px;
  gap: 20px;

  h1{
    font-size: 18px;
    font-family: 'Baloo 2', cursive;
  }

  .form-container {
    display:flex;
    flex-direction: column;
    gap: 16px;
  }

  .address {
    display: flex;
    flex-direction: column;
    padding: 40px;
    background-color: ${(props) => props.theme['base-card']};

    img {
      width: 22px;
      height: 22px;
    }

    div {
      display: flex;
      flex-direction: row;
      line-height: 18.2px;
    }

    .header-address{
      display: flex;
      flex-direction: column;
    }

    h1{
      font-size: 18px;
      font-family: 'roboto';
      font-weight: 400;
    }
    span {
      font-size: 14px;
      color: ${(props) => props.theme['base-text']};
    }

  }

  form {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 32px;
  }

  form input{
      height: 42px;
      background-color: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-text']};
      border-radius: 4px;
      border: 1px solid ${(props) => props.theme['base-button']};
      padding: 12px;

      :nth-child(1){
        width: 200px;
        display: inline-block;
      }
      :nth-child(2){
        width: 100%;
      }
      :nth-child(3){
        width: 200px;
      }
      :nth-child(4){
        width: 350px;
      }
      :nth-child(5){
        width: 200px;
      }
      :nth-child(6){
        width: 280px;
      }
      :nth-child(7){
        width: 60px;
      }
    }



  .payment {
    background-color: ${(props) => props.theme['base-card']};
    padding: 40px;


    .payment-option {
    display: flex;
    gap: 8px;
    line-height: 18.2px;

    img {
      width: 22px;
      height: 22px;
    }

    div {
      display: flex;
      flex-direction: column;
    }

    h1{
      font-size: 18px;
      font-family: 'roboto';
      font-weight: 400;
    }
    span {
      font-size: 14px;
      color: ${(props) => props.theme['base-text']};
    }
  }

  .buttons {
      display: flex;
      flex-direction: row;
      gap: 10px;
      margin-top: 32px;
    }
    
    button {
      width: 178.67px;
      height: 51px;
      display:flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      background-color: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-text']};
      border: none;
      border-radius: 6px;
    }

  }

`

export const SelectedCoffees = styled.div`
  display: flex;
  flex-direction: column;
  width:448px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  .selected-coffees-container{
    background-color: ${(props) => props.theme['base-card']};
    padding: 40px;
  }

  h1{
    font-size: 18px;
    font-family: 'Baloo 2', cursive;
  }

  .coffee-list-selected {
    display: flex;
    flex-direction: row;
    gap: 20px;
    border-bottom: 1px solid ${(props) => props.theme['base-button']};
    padding: 12px 0;
    
    

    img {
      width: 64px;
      height: 64px;
    }

    h1 {
      font-size: 16px;
      font-weight: 400;
      color: ${(props) => props.theme['base-subtitle']};
      font-family: 'roboto';
    }

    .buttons-cart {
      display: flex;
      gap: 10px;
    }


    .Qtd {
      display: flex;
      flex-direction: row;

      button {
        width: 24px;
        height: 32px;
        border: none;
        background-color: ${(props) => props.theme['base-button']};
        color: ${(props) => props.theme['purple']};
        font-size: 18px;
        font-weight: bold;
        cursor: pointer;
      
        :first-child {
          border-top-left-radius: 6px;
          border-bottom-left-radius: 6px;
        }
        :last-child {
          border-top-right-radius: 6px;
          border-bottom-right-radius: 6px;
        }
      }

      span {
        width: 18px;
        height: 32px;
        background-color: ${(props) => props.theme['base-button']};
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    span:nth-child(3) {
      justify-content: flex-end;
    }

    .remove-coffee {
      
      img {
        width: 16px;
        height: 16px;
      }

      button {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 4px; 
        height: 32px;
        border: none;
        font-weight: 12px;
        padding: 10px;
        background-color: ${(props) => props.theme['base-button']};
        color: ${(props) => props.theme['base-text']};
        border-radius: 6px;
        cursor: pointer;

        span {
        
        }
      }
    }
  }

  .cart{
      display: flex;
      flex-direction: column;
      gap: 12px;
      font-size: 16px;
      background-color: ${(props) => props.theme['base-card']};

      div {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        color: ${(props) => props.theme['base-text']}
      }

      div span {
        font-size: 16px;
        line-height: 20.8px;
      }

      .total {
        font-size: 26px;
      }
    }

  button {
    height: 46px;
    width: 100%;
    background-color: ${(props) => props.theme['yellow']};
    color: ${(props) => props.theme['white']};
    border: none;
    border-radius: 6px;
    font-weight: bold;
  }

 `