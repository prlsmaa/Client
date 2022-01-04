import React from 'react';
import axios from 'axios';

export class Users extends React.Component {
  constructor(props)
  {
    super(props);
    this.removeData=this.removeData.bind(this);
  }
  state = {
    persons: []
  }
  
  componentDidMount() {
    axios.get(`https://localhost:44362/User/GetAll`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
      .catch(res => {
        })
  }

  removeData(id) {
    let userID= JSON.stringify({
      Id: id
        });
    debugger
    axios.delete(`https://localhost:44362/User/Delete`, userID)
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
  }

  render() {
    return this.state.persons && this.state.persons.map(({ id, name, surname }) => {
      return (
          <tr key={id}>
              <td>{id}</td>
              <td>{name}</td>
              <td>{surname}</td>
              <td className='opration'>
                  <button debugger onClick={() => this.removeData(id)}>Delete</button>
              </td>
          </tr>
      )
  })
  }
}