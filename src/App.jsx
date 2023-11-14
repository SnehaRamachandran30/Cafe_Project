import { useState } from "react";
import Header from "./components/header";
import Orders from "./components/orders";
import AddOrder from "./components/addOrder";

function App() {
  const [neworder, setNeworder] = useState(false);
  const [orders, setOrders] = useState([
    {
      id: 1,
      table: "Table 1",
      odr: "Latte",
      servings: 2
    },
    {
      id: 2,
      table: "Table 2",
      odr: "Scotch Egg",
      servings: 1
    },
    {
      id: 3,
      table: "Table 3",
      odr: "Chicken Pasta",
      servings: 1
    }
  ]);

  function onAddneworder(order) {
    const id = Math.floor(Math.random() * 10000) + 1;
    const addneworder = { id, ...order };
    setOrders([...orders, addneworder]);
  }

  function deleteOrder(id) {
    setOrders(orders.filter((order) => order.id !== id));
  }

  return (
    <i>
      <div className="app">
        <Header onadd={() => setNeworder(!neworder)} />
        {neworder && <AddOrder onAddneworder={onAddneworder} />}
        {orders.length > 0 ? (
          <Orders orders={orders} deleteOrder={deleteOrder} />
        ) : (
          "No orders received"
        )}
      </div>
    </i>
  );
}

export default App;
