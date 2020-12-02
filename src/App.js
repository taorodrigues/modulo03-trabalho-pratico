import React, { Component } from 'react';

import { calculateSalaryFrom } from './helpers/salary';

import HeaderComponent from './components/HeaderComponent';
import InputReadOnlyComponent from './components/InputReadOnlyComponent';
import SalarioBrutoComponent from './components/InputFullSalaryComponent';
import ProgressBarSalaryComponent from './components/ProgressBarSalaryComponent';

const COLOR_INSS = '#e67e22';
const COLOR_IRPF = '#c0392b';
const COLOR_NET_SALARY = '#16a085';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1000,
    };
  }

  /**
   * Chama a função de calcular salário, passando como parâmetro o valor lido
   * do input de Salário Bruto.
   */
  calculateSalary = (value) => {
    this.setState({ fullSalary: value });
  };

  render() {
    const { fullSalary } = this.state;

    const salaryObject = calculateSalaryFrom(fullSalary);

    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
    } = salaryObject;

    const percentINSS = (discountINSS / fullSalary) * 100;
    const percentIRPF = (discountIRPF / fullSalary) * 100;
    const percentNetSalary = 100 - percentINSS - percentIRPF;

    return (
      <div className="container">
        <HeaderComponent />
        {/* Envia para o componente de Salario Bruto, a resposta da funcao de
        calcular salario, que possui todos os valores já calculados. */}
        <div className="row">
          <SalarioBrutoComponent
            currentValue={fullSalary}
            onSalaryChange={this.calculateSalary}
          />
          <InputReadOnlyComponent
            id="salarioLiquido"
            value={netSalary}
            percentage={percentNetSalary}
            color={COLOR_NET_SALARY}
            label="Salário líquido:"
          />
        </div>

        <div className="row">
          <InputReadOnlyComponent
            id="baseINSS"
            value={baseINSS}
            label="Base INSS:"
          />

          <InputReadOnlyComponent
            id="descontoINSS"
            value={discountINSS}
            percentage={percentINSS}
            salary={baseINSS}
            color={COLOR_INSS}
            label="Desconto INSS:"
          />
        </div>

        <div className="row">
          <InputReadOnlyComponent
            id="baseIRPF"
            value={baseIRPF}
            label="Base IRPF:"
          />

          <InputReadOnlyComponent
            id="descontoIRPF"
            value={discountIRPF}
            percentage={percentIRPF}
            salary={baseIRPF}
            color={COLOR_IRPF}
            label="Desconto IRPF:"
          />
        </div>

        <div className="row">
          <ProgressBarSalaryComponent
            percentINSS={percentINSS}
            colorINSS={COLOR_INSS}
            percentIRPF={percentIRPF}
            colorIRPF={COLOR_IRPF}
            percentNetSalary={percentNetSalary}
            colorNetSalary={COLOR_NET_SALARY}
          />
        </div>
      </div>
    );
  }
}
