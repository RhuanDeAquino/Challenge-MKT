import React, { useState } from 'react';
import styled from 'styled-components';

import KartImage from "../../assets/kart.png";
import Kart from './kart';

const Content = styled.header`
  width: 100vw;
  Height: 101px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #0F52BA;
  padding: 2rem;
`

const Title = styled.h1`
  display: flex;
  align-items: flex-end;
  font-weight: 600;
  font-size: 40px;
  color: #fff;

  > p {
    font-weight: 300;
    font-size: 20px;
    padding-left: 0.3rem;
    margin-bottom: 5px;
  }
`

const ButtonKart = styled.button`
    width: 90px;
    height: 45px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-size: 18px;
    font-weight: 600;

    > img {
      width: 18px;
      height: 18px;
    }
`
const Header = ({ addProducts, removerItem, removerAllItems, totalValue }) => {
  const [openKart, setOpenKart] = useState(false);
  const numberOfProducts = addProducts.length;
  return (
    <Content>
      <Title>
        MKT
        <p>Sistemas</p>
      </Title>
      <ButtonKart onClick={() => setOpenKart(true)}>
        {numberOfProducts || 0}
        <img src={KartImage} alt="MKT Sistemas" />
      </ButtonKart>
      {openKart && <Kart setOpenKart={setOpenKart} addProducts={addProducts} removerAllItems={removerAllItems} removerItem={removerItem} totalValue={totalValue} />}
    </Content>
  )
}

export default Header