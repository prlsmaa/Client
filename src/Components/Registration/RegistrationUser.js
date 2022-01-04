import React from 'react';
import axios from 'axios';

export class RegistrationUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '',name:'',surname:''};
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSurname = this.handleChangeSurname.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChangeName(event) {    this.setState({name: event.target.value});  }
  handleChangeSurname(event) {    this.setState({surname: event.target.value});  }
  handleChangeUsername(event) {    this.setState({username: event.target.value});  }
  handleSubmit(event) {
    let user = JSON.stringify({
      username: this.state.username,
      name: this.state.name,
      surname: this.state.surname
    });
    axios({
      method: 'post',
      url: 'https://localhost:44362/User/Create',
      data: user,
      headers:
      {
      'Content-Type' : 'application/json',
    }
  }) 
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
    alert('Welcome, ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>        
      <label>
          Name:
          <input type="text" defaultValue={this.state.name} onChange={this.handleChangeName}/>        
      </label>
      <label>
          Surname:
          <input type="text" defaultValue={this.state.surname} onChange={this.handleChangeSurname}/>        
      </label>
      <label>
          Username:
          <input type="text" defaultValue={this.state.username} onChange={this.handleChangeUsername}/>        
      </label>
      <input type="submit" defaultValue="Register " />
      </form>
    );
  }
}