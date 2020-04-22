const formatValue = (value: number): string =>
  Intl.NumberFormat().format(value); // TODO

export default formatValue;

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});
