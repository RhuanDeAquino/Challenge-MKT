import React, { useState } from 'react';
import styled from 'styled-components';

const Content = styled.div`
  width: 100%;
  height: 95px;
  padding: 1rem;
  background: #fff;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  margin-bottom: 1rem;
  animation: showCard ease 0.5s;

  @media(max-width: 768px) {
    width: 250px;
    height: 220.05px;
    flex-direction: column;
  }

  @keyframes showCard {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .top-mobile {
    display: flex;
    align-items: center;
    gap: 1rem;

    @media(max-width: 768px) {
      flex-direction: column;
    }

    > h3 {
    width: 113px;
    font-weight: 300;
    font-size: 13px;
    line-height: 17px;

    @media(max-width: 768px) {
      width: 100%;
    }
  }
  }

  .bottom-mobile {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;

    @media(max-width: 768px) {
      width: 100%;
    }
  }
`;

const ButtonCancel = styled.button`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  position: absolute;
  top: -3px;
  right: -3px;
  background: #000000;
  border: 0;
  font-size: 14px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

const BoxImage = styled.img`
  width: 46px;
  height: 57px;

  @media(max-width: 768px) {
    width: 80px;
    height: 95px;
  }
`;

const ContentCountItem = styled.div`
  max-width: 50px;
  width: 50px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: -10px;

  > p {
    font-size: 8px;
  }
`;

const BoxCont = styled.div`
  width: 100%;
  height: 19px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 0.3px solid #BFBFBF;
  border-radius: 8px;

  > button {
    border: 0;
    background: transparent;
    font-size: 12px;
    font-weight: 400;
    outline: none;
    height: 100%;
    width: 33%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  > p {
    font-size: 12px;
    padding: 0.3rem;
    border-left: 1px #BFBFBF solid;
    border-right: 1px #BFBFBF solid;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const ValueItem = styled.p`
  width: 70px;
  display: flex;
`;

const ItemKart = ({ itemImage, itemName, itemValue, removerItem }) => {
  const [numberItems, setNumberItems] = useState(1);

  return (
    <Content>
      <div className='top-mobile'>
        <ButtonCancel onClick={removerItem}>X</ButtonCancel>
        <BoxImage src={itemImage} alt={itemName} />
        <h3>{itemName}</h3>
      </div>
      <div className='bottom-mobile'>
        <ContentCountItem>
          <p>Qtd :</p>
          <BoxCont>
            <button onClick={() => setNumberItems(numberItems + 1)}>+</button>
            <p>{numberItems}</p>
            <button onClick={() => setNumberItems(numberItems - 1)}>-</button>
          </BoxCont>
        </ContentCountItem>
        <ValueItem>R$ {Math.floor(itemValue)}</ValueItem>
      </div>
    </Content>
  );
};

export default ItemKart;