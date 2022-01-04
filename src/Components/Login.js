import React from 'react';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state={username:''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {    this.setState({username: event.target.value});  }
  handleSubmit(event) {
    alert('Welcome, ' + this.state.username +' !');
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>        
      <label>
          UserName:
          <input type="text" defaultValue={this.state.username} onChange={this.handleChange} />        
      </label>
      <input type="submit" defaultValue="Logins" />
      </form>
    );
  }
}