import React from 'react';
import axios from 'axios';

export class Orders extends React.Component {
  constructor(props)
  {
    super(props);
    this.removeData=this.removeData.bind(this);
  }
  state = {
    orders: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/posts`)
      .then(res => {
        const orders = res.data;
        this.setState({ orders });
      })
      .catch(res => {
        })
  }
  removeData(id) {
    debugger
    axios.delete('https://jsonplaceholder.typicode.com/users/${id}' )
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    
  }

  render() {
    return this.state.orders && this.state.orders.map(({id, title, body }) => {
      return (
          <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{body}</td>
              <td className='opration'>
                  <button onClick={() => this.removeData(id)}>Delete</button>
              </td>
          </tr>
      )
  })
  }
}