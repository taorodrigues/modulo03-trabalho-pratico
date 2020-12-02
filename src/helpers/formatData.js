const numberFormatter = Intl.NumberFormat('pt-BR');

const moneyFormatter = Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

const percentageFormatter = Intl.NumberFormat('pt-BR', {
  style: 'percent',
  minimumFractionDigits: 2,
});

/**
 * Utiliza formatação de números brasileiros.
 * @param {} number
 */
function formatNumber(number) {
  return numberFormatter.format(number);
}

/**
 * Formata número como moeda brasileira.
 * @param {*} number
 */
function formatMoney(number) {
  return moneyFormatter.format(number);
}

/**
 * Calcula porcentagem de dado número.
 * @param {*} number
 */
function formatPercentage(number) {
  //return `(${number.toFixed(2).replace('.', ',')}%)`;
  return `(${percentageFormatter.format(number / 100)})`;
}

export { formatNumber, formatMoney, formatPercentage };
