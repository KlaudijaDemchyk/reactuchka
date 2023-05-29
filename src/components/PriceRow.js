import currencyFormatter from 'currency-formatter';

function PriceRow({ price, currency, exchangeRate = 1 }) {
  if (!currency) {
    return null; 
  }

  return <>{currencyFormatter.format(price * exchangeRate, { code: currency })}</>;
}

export default PriceRow;
