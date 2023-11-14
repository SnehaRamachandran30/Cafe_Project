import { FaTimes } from "react-icons/fa";
function Order({ order, deleteOrder }) {
  return (
    <div className="order">
      <h3>
        {order.table}{" "}
        <FaTimes
          style={{ color: "crimson", cursor: "pointer" }}
          className="cross"
          onClick={() => deleteOrder(order.id)}
        />
      </h3>
      <p>{order.odr}</p>
      <p>{order.servings}</p>
    </div>
  );
}

export default Order;
