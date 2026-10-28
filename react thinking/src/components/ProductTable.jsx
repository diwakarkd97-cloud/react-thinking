import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

const ProductTable = ({ products, filterText, inStockOnly }) => {
  const row = [];
  let previousCategory = null;

  products.forEach((product, index) => {
    if (
      product.name.toLowerCase().indexOf(
        filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }

    if (inStockOnly && !product.stocked) {
      return;
    }

    if (product.category !== previousCategory) {
      row.push(
        <ProductCategoryRow 
          category={product.category} 
          key={product.category} 
        />
      );
      previousCategory = product.category;
    }

    row.push(
      <ProductRow 
        product={product} 
        key={index} 
      />
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{row}</tbody>
    </table>
  );
};

export default ProductTable;
