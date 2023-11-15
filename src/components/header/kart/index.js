import styled from 'styled-components';
import ItemKart from '../../itemKart';

const Content = styled.div`
  position: fixed;
  bottom: 0;  
  right: 0;
  z-index: 9;
  width: 486px;
  height: 100vh;
  background: #0F52BA;
  box-shadow: -5px 0 6px 0 rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  animation: showKart 0.3s ease;

  @keyframes showKart {
    0% { right: -10%; }
    100% { right: 0; }
  }

  @media(max-width: 768px) {
    max-width: 80%;
  }
`;

const BoxTitle = styled.div`
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

const TittleKart = styled.h2`
  width: 180px;
  height: 60px;
  color: #fff;
`;

const ButtonClose = styled.button`
  width: 38px;
  height: 38px;
  font-size: 28px;
  font-weight: 400;
  color: #FFFFFF;
  background: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
`;

const BoxItems = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.2rem 2rem; 
  overflow-y: scroll;
  overflow-x: hidden;

  @media(max-width: 768px) {
    padding: .9rem 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

const BoxPurchase = styled.div`
  width: 100%;
`;

const BoxValue = styled.div`
  width: 100%;
  height: 97px;
  font-size: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;

  > p {
    font-weight: 700;
    color: #FFF;
  }
`;

const ButtonFinish = styled.button`
  background: #000000;
  color: #fff;
  font-size: 28px;
  width: 100%;
  height: 97px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  border: 0;
`;

const Kart = ({ addProducts, setOpenKart, removerItem, removerAllItems, totalValue }) => {
  return (
    <Content>
      <BoxTitle>
        <TittleKart>Carrinho <br /> de Compras</TittleKart>
        <ButtonClose onClick={() => setOpenKart(false)}>X</ButtonClose>
      </BoxTitle>
      <BoxItems>
        {addProducts.map((item) => (
          <ItemKart
            key={item.id}
            item={item}
            itemImage={item.photo}
            itemName={item.name}
            itemValue={item.price}
            removerItem={() => removerItem(item.id)}
          />
        ))}
      </BoxItems>
      <BoxPurchase>
        <BoxValue>
          <p>Total:</p>
          <p>R$ {totalValue}</p>
        </BoxValue>
        <ButtonFinish onClick={() => removerAllItems()}>Finalizar Compra</ButtonFinish>
      </BoxPurchase>
    </Content >
  );
};

export default Kart;