import React from 'react';


const Product = ({match,data}) => {
    var product= data.find(p => p.id === match.params.productId);
    var productsData;
  
    if(product)
      productsData = <div>
        <h3> {product.name} </h3>
        <p>{product.description}</p>
        <hr/>
        <h4>{product.status}</h4>  </div>;
    else
      productsData = <h2> Sorry. Product doesnt exist </h2>;
  
    return (
      <div>
        <div>
           {productsData}
        </div>
      </div>
    )    
  }

export default Product;