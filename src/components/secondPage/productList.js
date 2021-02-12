import React from 'react';
import Product from './product';
import './homepage.css'
import BarChart from './demo'
import {withRouter} from 'react-router-dom'

 class ProductList extends React.Component {
  constructor(props)
  {
    super(props);
    this.logout = this.logout.bind(this)
  }
  logout(event)
  {
    event.preventDefault();
    localStorage.removeItem('rememberMe');
    this.props.history.push('/')
  }
  render () {
    var commentNodes = this.props.data.map(comment => (
        <Product key={comment.month} author={comment.month} stat={comment.stat} className="product"><br/>
        </Product>
    ));
    return (
      <>
        <table >
          <thead>
            <tr>
              <th>Month</th>
              <th>Stat</th>
            </tr>
          </thead>
          <tbody >
            {commentNodes}
          </tbody>
        </table>
        <BarChart data={this.props.data} />
        <button style={{height: "20px" , width: "100px"}} onClick={ this.logout } >Logout</button>
      </>
    );
  }
}

export default withRouter(ProductList);