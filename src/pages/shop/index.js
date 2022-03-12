import React from 'react';
import Products from './Products';
import '../../styles/components/Products.scss';
import { FadeInDiv } from '../../components/animations/FadeInDiv';

const Shop = (props) => {
  console.log(props);
  return (
    <FadeInDiv>
      <Products />
    </FadeInDiv>
  );
};

export default Shop;
