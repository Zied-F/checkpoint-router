import React from 'react';
import { Link, Route } from 'react-router-dom';
import Product from './Product'


const Products =({match}) => {
    const productsData = [
        {id:1,
         name:'Nike Liteforce Blue Sneakers',
         description:'test1',
         status :'Available'},
        {id:2,
         name:'Stylised Flip Flops and Slippers',
         description:'test2',
         status :'Out of stock'},
         {id:3,
            name:'Adidas Adispree Running Shoes',
            description:'test3',
            status :'Available'},
        {id:4,
            name:'Adidas Mid Sneakers',
            description:'test4',
            status :'Out of stock'},
    ];

var linkList = productsData.map( (product) => {
    return(
      <li>
        <Link to={`${match.url}/${product.id}`}>
          {product.name}
        </Link>
      </li>
      )

    })

  return(
    <div>
        <div>
         <div>
           <h3> Products</h3>
           <ul> {linkList} </ul>
         </div>
        </div>

        <Route path={`${match.path}/:productId`}
            render={ (props) => <Product data= {productsData} {...props} />}/>
        <Route exact path={match.path}
            render={() => (
            <div>Please select a product.</div>
            )}
        />
    </div>
  )
}
export default Products;