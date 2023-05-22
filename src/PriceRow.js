import currencyFormatter from 'currency-formatter';

console.log(currencyFormatter);

function PriceRow(props) {
  return (
    <>
      {currencyFormatter.format(props.price * 38, { code: props.currency })}
    </>
  );
}
export default PriceRow;
