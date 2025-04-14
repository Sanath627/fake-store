import React, { Component } from 'react';
import './productList.css';
class productList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      loading: true,
      error: null
    };
  }
  componentDidMount() {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        this.setState({ products: data, loading: false });
      })
      .catch(error => {
        this.setState({ error: 'Failed to load products.', loading: false });
        console.error('Fetch error:', error);
      });
  }

  render() {
    const { products, loading, error } = this.state;

    if (loading) {
      return <p className="loading">Loading products...</p>;
    }

    if (error) {
      return <p className="error">{error}</p>;
    }

    return (
      <div className="product">
        {products.map(product => (
          <div className="card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p className="desc">{product.description}</p>
            <p className="price">${product.price.toFixed(2)}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default productList;
