import React, { Component } from 'react';
import NameLabel from './NameLabel';
class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          name: 'Shankar Acharya',
          post: 'Future EM',
      }
  }
  componentDidMount() {
      let count = 0
      setTimeout( () => {
          this.setState({name: 'Shankar is good '+(++count)});
      }, 2000);
  }
  render() {
    const { name, post } = this.state;
    return <NameLabel name={name} />;
  }
}

export default App;
