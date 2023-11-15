import styled from 'styled-components';

const ProductContainer = styled.div`
  width: 220px;
  height: 285px;
  padding: 1rem;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1352);
  border-radius: 8px; 
  overflow: hidden;
  position: relative;

  @media(max-width: 768px) {
    width: 251px;
    height: 328px;
  }
`;

const ProductFigure = styled.figure`
  width: 100%;
  height: 138px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.img`
  width: 80%;
  max-height: 100%;
`;

const ProductBoxInfo = styled.div`
  display: flex;
  justify-content: space-between;
  height: 38px;
`;

const ProductTitle = styled.h3`
  width: 124px;
  font-size: 1rem;
  line-height: 19px;
  font-weight: 400;

  @media(max-width: 768px) {
  width: 120.77px;
  }
`;

const ProductPrice = styled.p`
  background: #373737;
  color: #fff;
  height: 27px;
  width: 67px;
  font-size: 15px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProductDescription = styled.p`
  font-size: 8px;
  margin: 0.7rem 0;
`;

const PurchaseButton = styled.button`
  width: 100%;
  height: 32px;
  background: #0F52BA;
  color: #fff;
  border: 0;
  position: absolute;
  bottom: 0;
  left: 0;  
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  > img {
    width: 12px;
  }
`;

const Product = ({ id, photo, name, price, description, imgShop, selecionarItem }) => {
  return (
    <ProductContainer key={id}>
      <ProductFigure>
        <ProductImage src={photo} alt={name} />
      </ProductFigure>
      <ProductBoxInfo>
        <ProductTitle>{name}</ProductTitle>
        <ProductPrice>R${Math.floor(price)}</ProductPrice>
      </ProductBoxInfo>
      <ProductDescription>{description}</ProductDescription>
      <PurchaseButton onClick={() => selecionarItem({ id, photo, name, price, description })}>
        <img src={imgShop} alt={description} />
        Comprar
      </PurchaseButton>
    </ProductContainer>
  )
};

export default Product;

