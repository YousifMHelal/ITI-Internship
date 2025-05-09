import React from 'react'

const Product = ({products, cat}) => {
  return (
    <>
      {
        products.filter(product => product.product_category === cat)
        .map(pro => {
          return(
            <div key={pro.product_id} className='content'>
              <h4>{pro.product_name}</h4>
              <p>{pro.product_desc}</p>
            </div>
          )
        })
      }
    </>
  )
}

export default Product