import React, { Component } from 'react';

import { formatPercentage } from '../helpers/formatData';

export default class ProgressBarSalaryComponent extends Component {
  render() {
    const {
      percentINSS,
      percentIRPF,
      percentNetSalary,
      colorINSS,
      colorIRPF,
      colorNetSalary,
    } = this.props;

    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <div
          style={{
            backgroundColor: colorINSS,
            width: percentINSS + '%',
            height: '20px',
            fontSize: '10px',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: '3px',
          }}
        >
          {formatPercentage(percentINSS)}
        </div>

        <div
          style={{
            backgroundColor: colorIRPF,
            width: percentIRPF + '%',
            height: '20px',
            fontSize: '10px',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: '3px',
          }}
        >
          {formatPercentage(percentIRPF)}
        </div>

        <div
          style={{
            backgroundColor: colorNetSalary,
            width: percentNetSalary + '%',
            height: '20px',
            fontSize: '10px',
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: '3px',
          }}
        >
          {formatPercentage(percentNetSalary)}
        </div>
      </div>
    );
  }
}
