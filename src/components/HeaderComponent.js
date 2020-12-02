import React, { Component } from 'react';
import css from './header.module.css';

export default class HeaderComponent extends Component {
  render() {
    return (
      <div className={css.header}>
        <h1>React Salário</h1>
        <h3 className="center">Trabalho Prático - Módulo 03</h3>
      </div>
    );
  }
}
