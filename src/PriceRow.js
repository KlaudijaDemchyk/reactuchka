import currencyFormatter from 'currency-formatter';

function PriceRow({ price, currency, exchangeRate }) {
  return <>{currencyFormatter.format(price * exchangeRate, { code: currency })}</>;
}

export default PriceRow;
