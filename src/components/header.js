function Header({ onadd }) {
  return (
    <div className="header">
      <h1>Time Garden</h1>
      <div className="heading2">
        <h2>
          Welcome To Our Cafe! Happy Times<span>☺</span>
        </h2>
        <button onClick={onadd}>Add</button>
      </div>
    </div>
  );
}

export default Header;
