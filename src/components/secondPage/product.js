 import React from 'react';
import './homepage.css'
 

const Product = ({author, stat}) => {
    const data = {};
    data.month = author;
    data.stat = stat;
    //console.log(data)
    return(
  <tr className="product">
    <td>{author}</td>
    <td>{stat}</td>
    {/* <BarChart data={data} /> */}
  </tr>
)};

export default Product;


