import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  }

  render() {
    return (
      <div>
        <form>
              <label>Name:</label>
              <input type="text" value={this.state.name} onChange={this.handleChange} />
            </form>
      </div>
    );
    }
}
export default Form;
