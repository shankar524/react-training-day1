import React from 'react';
import Select from 'react-select';

class DropDown extends React.Component {
    constructor(props)
    {
        super(props);
        this.state = {
            options: props.options,
            selected: null,
        }
    }
  handleChange(selected) {
    this.setState({ selected });
    console.log(`Option selected:`, selected);
  }

  printSelected()
  {
    const { selected } = this.state;
      if(selected)
      {
          return <h3> You selected {selected}.</h3>
      }
      else
      return null;
  }
  render() {
    const { selected, options } = this.state;

    return (
        <div>
            <Select
            value={selected}
            onChange={this.handleChange}
            options={options}
            />
            {
                this.printSelected()
            }
        </div>
    );
  }
}
export default DropDown;