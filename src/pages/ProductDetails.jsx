import React from 'react';
import PropTypes from 'prop-types';
// import * as api from '../services/api';

class ProductDetails extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     product: {},
  //   };
  // }

  // componentDidMount() {
  //   this.getProducts();
  // }

  // async getProducts() {
  //   const { match: { params: { id } } } = this.props;
  //   const product = await api.getItem(id);
  //   this.setState({
  //     product,
  //   });
  // }

  render() {
    // const { product } = this.state;
    const productStr = localStorage.getItem('product');
    const product = JSON.parse(productStr);
    return (
      <div className="card">
        <p data-testid="product-detail-name">
          { product.title }
        </p>
        <img
          src={ product.thumbnail }
          alt={ product.title }
        />
        {product.attributes.map((attribute) => (
          <div key={ attribute.name }>
            <p>
              {`${attribute.name}: ${attribute.value_name}`}
            </p>
          </div>
        ))}
        <p>{ product.price }</p>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
      search: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default ProductDetails;
