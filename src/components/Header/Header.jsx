import "./Header.css";
import ShoppingBag from "../../assets/ShoppingBag.svg";
import Ellipsenotif from "../../assets/Ellipsenotif.svg";

function Header() {
  const navBar = [
    { id: 1, name: "Home", link: "/home", active: true },
    { id: 2, name: "Category", link: "/category" },
    { id: 3, name: "Sales", link: "/sales" },
    { id: 4, name: "FAQ", link: "/faq" },
    { id: 5, name: "About", link: "/about" },
  ];

  return (
    <header className="header">
      <div className="logo">FinestMart</div>

      <nav>
        <ul className="navList">
          {navBar.map((item) => (
            <li key={item.id}>
              <a href={item.link} className={item.active ? "active" : ""}>
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="actions">
        <div className="iconContainer">
          <img src={ShoppingBag} alt="icon" />
          <img className="icon" src={Ellipsenotif} alt="icon" />
        </div>
        <a href="#">Sign In</a>
        <button className="signUp">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
