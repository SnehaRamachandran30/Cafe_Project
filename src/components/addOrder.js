import { useState } from "react";

function AddOrder({ onAddneworder }) {
  const [table, setTable] = useState();
  const [odr, setOrder] = useState();
  const [servings, setServings] = useState();

  function onSubmit(e) {
    e.preventDefault();
    onAddneworder({ table, odr, servings });
    setOrder("");
    setServings("");
    setTable("");
  }
  return (
    <form onSubmit={onSubmit}>
      <fieldset>
        <legend style={{ fontWeight: "bold", fontSize: "22px" }}>
          Place Order
        </legend>

        <div className="form">
          <label>Table Number</label>
          <input
            type="text"
            placeholder="Enter the table number"
            value={table}
            onChange={(e) => setTable(e.target.value)}
          ></input>
        </div>
        <div className="form">
          <label>Order</label>
          <input
            type="text"
            placeholder="Enter the order"
            value={odr}
            onChange={(e) => setOrder(e.target.value)}
          ></input>
        </div>
        <div className="form">
          <label>Servings</label>
          <input
            type="text"
            placeholder="Enter how much servings you need"
            value={servings}
            onChange={(e) => setServings(e.target.value)}
          ></input>
        </div>
        <input
          type="submit"
          className="form submit"
          value="Place the Order"
          style={{ cursor: "pointer" }}
        ></input>
      </fieldset>
    </form>
  );
}

export default AddOrder;
