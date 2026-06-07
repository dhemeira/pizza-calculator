export const formatNumber = (value: number) =>
  new Intl.NumberFormat('en', { useGrouping: true }).format(value).replace(/,/g, ' ');

export const parseNumber = (value: string) => {
  const digits = value.replace(/\D/g, '');
  return digits === '' ? 0 : parseInt(digits, 10);
};
