import React, { useEffect, useState } from 'react';
import axios from 'axios';

import imgShop from "./assets/shopping-bag.png"

import styled from 'styled-components';
import Header from './components/header';
import Product from './components/CardItem';

const Content = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;

  @media(max-width: 1024px) {
    overflow: hidden;
    height: auto;
  }
`;

const BoxContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-top: 5rem;

  @media(max-width: 1024px) {
  padding-top: 0;
    align-items: center;
    justify-content: flex-start;
  }
`;

const BoxProducts = styled.div`
  padding: 1rem 0;
  max-width: 938px;
  width: 100%;
  height: auto;
  max-height: 601px;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;

  @media(max-width: 1024px) {
    align-items: center;
    justify-content: center;
    height: 100%;
    overflow: scroll; 
    max-height: 100%;
  }
`;

const Rights = styled.p`
  width: 100vw;
  text-align: center;
  padding: 0 1rem;
  background: #EEEEEE;
`

const App = () => {
  const [products, setProducts] = useState([]);
  const [addProducts, setAddProducts] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  useEffect(() => {
    const apiUrl = 'https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=DESC';

    axios.get(apiUrl)
      .then(response => {
        const responseData = response.data.products;
        console.log('responseData:', responseData);
        setProducts(responseData);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const selecionarItem = (item) => {
    const itemJaClicado = addProducts.some((produto) => produto.id === item.id);

    if (!itemJaClicado) {
      setAddProducts((prevAddProducts) => [...prevAddProducts, item]);
      setTotalValue((prevTotal) => prevTotal + item.price * 1);
    }
  };


  const removerItem = (itemId) => {
    const itemRemovido = addProducts.find((product) => product.id === itemId);

    if (itemRemovido) {
      const diferencaDePreco = itemRemovido.price * 1;

      setAddProducts((prevAddProducts) =>
        prevAddProducts.filter((product) => product.id !== itemId)
      );

      setTotalValue((prevTotal) => prevTotal - diferencaDePreco);
    }
  };

  const removerAllItems = () => {
    setAddProducts([])
    setTotalValue(0)
  };


  return (
    <Content>
      <Header addProducts={addProducts} removerItem={removerItem} removerAllItems={removerAllItems} totalValue={totalValue} />
      <BoxContent>
        <BoxProducts>
          {products.map((item) => (
            <Product
              key={item.id}
              id={item.id}
              photo={item.photo}
              name={item.name}
              price={item.price}
              description={item.description}
              imgShop={imgShop}
              selecionarItem={selecionarItem}
            />
          ))}
        </BoxProducts>
        <Rights>MKS Sistemas © Todos os direitos reservados</Rights>
      </BoxContent>
    </Content>
  );
}

export default App;
