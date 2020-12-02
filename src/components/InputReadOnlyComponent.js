import React, { Component } from 'react';
import { formatMoney, formatPercentage } from '../helpers/formatData';

export default class InputReadOnlyComponent extends Component {
  constructor() {
    super();
  }

  render() {
    const { color = 'black', value, percentage, label, id } = this.props;

    let formattedValue = formatMoney(value);
    formattedValue += percentage > 0 ? ' ' + formatPercentage(percentage) : '';

    return (
      <div className="input-field col m6">
        <input
          disabled
          id={id}
          type="text"
          className="validate"
          value={formattedValue}
          style={{ color, fontWeight: 'bold' }}
        />
        <label className="active" htmlFor={id}>
          {label}
        </label>
      </div>
    );
  }
}
