import React from 'react';

class SuperHeroForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      heroName: '',
      power: '',
      weakness: '',
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleHeroNameChange = this.handleHeroNameChange.bind(this);
    this.handlePowerChange = this.handlePowerChange.bind(this);
    this.handleWeaknessChange = this.handleWeaknessChange.bind(this);
    this.handleHeroSubmit = this.handleHeroSubmit.bind(this);
  }

  handleNameChange(event) {
    this.setState({ name: event.target.value });
  }

  handleHeroNameChange(event) {
    this.setState({ heroName: event.target.value });
  }

  handlePowerChange(event) {
    this.setState({ power: event.target.value });
  }

  handleWeaknessChange(event) {
    this.setState({ weakness: event.target.value });
  }

  handleHeroSubmit(event) {
    event.preventDefault();
    this.props.dispatch()
    console.log(this.state);
  }

  render() {
    const {
      name, heroName, power, weakness,
    } = this.state;
    return (
      <form>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" className="form-control" value={name} onChange={this.handleNameChange}></input>
        </div>
        <div className="form-group">
          <label htmlFor="heroName">Hero Name</label>
          <input type="text" className="form-control" placeholder="Hero Name" value={heroName} onChange={this.handleHeroNameChange}></input>
        </div>
        <div className="form-group">
          <label htmlFor="power">Power</label>
          <input type="text" className="form-control" name="power" placeholder="Hero Power" value={power} onChange={this.handlePowerChange}></input>
        </div>
        <div className="form-group">
          <label htmlFor="weakness">Weakness</label>
          <input type="text" className="form-control" name="weakness" placeholder="Hero Power" value={weakness} onChange={this.handleWeaknessChange}></input>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.handleHeroSubmit}>Submit</button>
      </form>
    );
  }
}
export default SuperHeroForm;
