import styled from "styled-components";


export const HomeCotainer = styled.main` 
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 92px 0;
  gap: 56px;

  .Info-bg{
    display: flex;
  }

  .Info h1 {
    font-family: 'Baloo 2', cursive;
    font-weight: bold;
    font-size: 3rem;
    line-height: 62.4px;
  }

  h2 {
    margin-top: 16px;
    line-height: 26px;
    font-size: 1.25rem;
    font-weight: normal;
    color: ${(props) => props.theme['base-subtitle']};
  }
  
  img {
    width: 30rem;
    height: 22rem;
  }

  .Items {
    margin-top: 66px;
    display: flex;
    flex-flow: row wrap;
    flex-shrink: 50%;
  }     

  .item {
    display: flex;
    align-items: center;
    width: 292px;
  }

  .item p {
    color: #fff;
    padding: 8px;
    border-radius: 50%;
    margin-top: 6px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .item .item-1{
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  .item .item-2{
    background-color: ${(props) => props.theme['base-text']};
  }

  .item .item-3{
    background-color: ${(props) => props.theme['yellow']};
  }

  .item .item-4{
    background-color: ${(props) => props.theme['purple-dark']};
  }


  .item span {
    color: ${(props) => props.theme['base-text']};
    font-weight: normal;
    margin-left: 10px;
  }

`

export const CoffeeList = styled.div`

  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  
  .Coffee-card {
    width: 256px;
    height: 310px;
    background-color: ${(props) => props.theme['base-card']};
    padding: 10px 20px;
    margin-top: 120px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-top-left-radius: 6px;
    border-top-right-radius: 36px;
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 36px;

    img {
      width: 120px;
      height: 120px;
      margin-top: -60px;
    }

    .compositionContainer {
      margin-top: 16px;
      display: flex;
      gap: 5px;
    }

    .Composition {
      padding: 4px 8px;
      font-weight: 700;
      border-radius: 30px;
      color: ${(props) => props.theme['yellow-dark']};
      background-color: ${(props) => props.theme['yellow-light']};
      font-size: 10px;
    }

    
    h1 {
      font-size: 20px;
      margin-top: 15px;
      font-family: 'Baloo 2', cursive;
      color: ${(props) => props.theme['base-subtitle']};
    }

    p {
      font-size: 14px;
      line-height: 1.8rem;
      color: ${(props) => props.theme['base-label']};
      text-align: center;
    }

    .Price-qtd {
      width: 208px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-top: 32px;

    .Price {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      color: ${(props) => props.theme['base-text']};

      p {
        font-size: 14px;
      }

      span {
        color: ${(props) => props.theme['base-text']};
        font-family: 'Baloo 2', cursive;
        font-weight: 800;
        font-size: 24px;
        background: transparent ;
        margin-left: 6px;
      }
    }

    .Select-buy {
      display: flex;
      flex-direction: row;
      gap: 4px;
    }

    .Qtd {
      display: flex;
      flex-direction: row;

      button {
        width: 24px;
        height: 38px;
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
        height: 38px;
        background-color: ${(props) => props.theme['base-button']};
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }

    .Buy-coffee button {
        width: 38px;
        height: 38px;
        background-color: ${(props) => props.theme['purple-dark']};
        border: none;
        border-radius: 6px;
        color: ${(props) => props.theme['white']};
        font-size: 24px;
        padding: 8px;
        cursor: pointer;
        
    }

  }
} 

`