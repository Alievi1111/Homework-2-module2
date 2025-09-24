import "./Main.css";
import img from "../../assets/img.png";
import carrots from "../../assets/carrots.png";
import spinach from "../../assets/spinach.png";
function Main() {
  return (
    <main className="main">
      <div className="mainContent">
        <h1>
          Let your <span className="groceries">groceries</span> come to you
        </h1>
        <p>
          Get fresh groceries online without stepping out to make delicious food
          with the freshest ingredients
        </p>
        <div className="searchBox">
          <input type="text" placeholder="Search here" />
          <button>🔍</button>
        </div>
        <ul className="features">
          <li>✔ Fresh Vegetables</li>
          <li>✔ 100% Guarantee</li>
          <li>✔ Cash on Delivery</li>
          <li>✔ Fast Delivery</li>
        </ul>
      </div>
      <div>
        <img className="imgContainer" src={img} alt="img" />
      </div>
      <div>
        <div className="spinachContainer">
          <img src={spinach} alt="spinachImg" />
          <p>Fresh Spinach</p>
          <p>$12.00</p>
        </div>
        <div className="carrotsContainer">
          <img className="carrotsImg" src={carrots} alt="carrotsImg" />
          <p>Fresh carrots</p>
          <p>$9.00</p>
        </div>
      </div>
    </main>
  );
}
export default Main;
