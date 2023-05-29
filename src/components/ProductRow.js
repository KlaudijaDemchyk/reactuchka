import { Link } from 'react-router-dom';
import PriceRow from './PriceRow';

function ProductRow({ id, title, category, price, currency, exchangeRate }) {
  return (
    <tr key={id}>
      <td>{title}</td>
      <td>{category}</td>
      <td>
        <PriceRow price={price} currency={currency} exchangeRate={exchangeRate} />
      </td>
      <td>
        <Link to={`details/${id}`}>Details</Link>
      </td>
    </tr>
  );
}
export default ProductRow;
