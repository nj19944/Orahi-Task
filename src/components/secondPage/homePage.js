import React from 'react';
import ProductApi from '../../data/productApi'
import ProductList from './productList';
import './homepage.css'

export default class Homepage extends React.Component{
    constructor(props)
    {
        super(props);
        this.state = {
        data: []
      };
    }
    componentDidMount() {
        ProductApi.getAllData(stats => this.setState({ data: stats.data}));
      }
    render()
    {
        return(
            <div className="homepage-container">
                <h1 className="heading">Welcome to Orahi</h1>
                <div className="productlist">
                <ProductList data={this.state.data}  />
                </div>
                
            </div>
        )
    }
}