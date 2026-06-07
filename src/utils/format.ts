import i18n from '~/i18n/config';

export const formatNumber = (value: number) =>
  new Intl.NumberFormat(i18n.language, { useGrouping: true }).format(value);

export const parseNumber = (value: string) => {
  const digits = value.replace(/\D/g, '');
  return digits === '' ? 0 : parseInt(digits, 10);
};
