import Order from "./order";

function Orders({ orders, deleteOrder }) {
  return (
    <>
      {orders.map((order) => (
        <Order key={order.id} order={order} deleteOrder={deleteOrder} />
      ))}
    </>
  );
}

export default Orders;
