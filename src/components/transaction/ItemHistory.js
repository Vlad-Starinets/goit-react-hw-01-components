import PropTypes from "prop-types";
import css from "../transaction/Transaction.module.css";

function ItemHistory({ type, amount, currency }) {
  return (
    <tr className={css.elementHistory}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

ItemHistory.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};

export default ItemHistory;
