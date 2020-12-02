import React, { Component } from 'react';

export default class SalarioBrutoComponent extends Component {
  handleOnChange = ({ target }) => {
    const value = parseInt(target.value, 10);

    this.props.onSalaryChange(value);
  };

  render() {
    const { currentValue } = this.props;

    return (
      <div className="input-field col m6">
        <input
          autoFocus
          id="salary"
          type="number"
          value={currentValue}
          min="1000"
          step="100"
          onChange={this.handleOnChange}
        />
        <label className="active" htmlFor="salary">
          Salário bruto
        </label>
      </div>
    );
  }
}
