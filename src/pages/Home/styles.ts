import styled from "styled-components";


export const HomeCotainer = styled.main`
  display: flex;
  justify-content: center;
  margin: 92px 0;
  gap: 56px;

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
    background-color: black;
    justify-content: center;
    align-items: center;
  }

  .item span {
    color: ${(props) => props.theme['base-text']};
    font-weight: normal;
    margin-left: 10px;
  }

`