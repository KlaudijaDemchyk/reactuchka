import { Link, useMatch } from "react-router-dom";
import PriceRow from "./PriceRow";
function ProductRow(props) {
               return (
                 <tr key={props.id}>
                   <td>{props.title}</td>
                   <td>{props.category}</td>
                   <td>
                     <PriceRow price={props.price} currency={props.currency}/>
                   </td>
                   <td>
                     <Link to={`details/${props.id}`}>Details</Link>
                     {/*<link onClick={function button(){*/}
                     {/*        console.log(id);*/}
                     {/*    }}>*/}
                     {/*    Details*/}
                     {/*</link>*/}
                   </td>
                 </tr>
               );
                    }
                    export default ProductRow;