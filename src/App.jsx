import React from 'react';
import SuperHeroList from './components/SuperHeroList';
import SuperHeroForm from './components/SuperHeroForm';
import './styles/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SuperHeroList />
        <SuperHeroForm />
    </div>
);
  }
}

export default App;
