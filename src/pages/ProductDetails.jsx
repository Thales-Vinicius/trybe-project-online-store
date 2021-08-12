import React from 'react';

class ProductDetails extends React.Component {
  render() {
    const productStr = localStorage.getItem('product');
    const product = JSON.parse(productStr);
    return (
      <div className="card">
        <h2 data-testid="product-detail-name">
          { product.title }
        </h2>
        <div>
          <img
            src={ product.thumbnail }
            alt={ product.title }
          />
        </div>
        <div>
          <h3>Descrição:</h3>
          {product.attributes.map((attribute) => (
            <div key={ attribute.name }>
              <p>
                {`${attribute.name}: ${attribute.value_name}`}
              </p>
            </div>
          ))}
        </div>
        <p>{ `Valor: R$${product.price}` }</p>
      </div>
    );
  }
}

export default ProductDetails;
