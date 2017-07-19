import React from 'react';
import ReactDOM from 'react-dom';

class Select extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onChange(event.target.value);
    console.log(event.target.value);
  }

  render() {
    const { value } = this.props;
    const { firstValueOption } = this.props;
    const { secondValueOption } = this.props;

    return (
      <select
        value={value}
        onChange={this.handleChange}
        style={{ display: 'inline-block', marginRight: 100 }}
      >
        <option value={firstValueOption}>
          {this.props.children}
        </option>
        <option value={secondValueOption}>
          {this.props.children}
        </option>
      </select>
    );
  }
}

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
    this.handleChangeFirstSelect = this.handleChangeFirstSelect.bind(this);
    this.handleChangeSecondVsThirdSelect = this.handleChangeSecondVsThirdSelect.bind(this);
  }

  handleChangeFirstSelect(value) {
    this.setState = { value };
  }

  handleChangeSecondVsThirdSelect(value) {
    this.setState = { value };
  }

  render() {
    const valueFirstSelect = this.state.value;
    const valueSecondVsThirdSelect = valueFirstSelect === 0 ? 2 : 4;
    const arrayValueOption = valueFirstSelect === 0 ? [0, 1] : [2, 3]; // else if ===4 ? [4, 5]
    const textOption = ['Prise', 'Category'];

    return (
      <div>
        <Select
          value={valueFirstSelect}
          onChange={this.handleChangeFirstSelect}
          firstValueOption={arrayValueOption[0]}
          secondValueOption={arrayValueOption[1]}
        >
          {textOption[0]}
        </Select>

        <Select
          value={valueSecondVsThirdSelect}
          onChange={this.handleChangeSecondVsThirdSelect}
          firstValueOption={arrayValueOption[0]}
          secondValueOption={arrayValueOption[1]}
        />
      </div>
    );
  }
}
var mountNode = document.getElementById('form');

ReactDOM.render(<Form />, mountNode);
