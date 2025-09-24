import "./Footer.css";
import Dairy from "../../assets/Dairy.png";
import FruitsandVegetables from "../../assets/FruitsandVegetables.png";
import Condiments from "../../assets/Condiments.png";
import Babyfood from "../../assets/Babyfood.png";
import Grainandpasta from "../../assets/Grainandpasta.png";
function Footer() {
  const products = [
    {
      id: 1,
      img: Dairy,
      name: "Dairy Products",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      img: FruitsandVegetables,
      name: " Vegetables & Fruits",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 3,
      img: Condiments,
      name: " Spices & Seasonings",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 4,
      img: Babyfood,
      name: " Honey",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 5,
      img: Grainandpasta,
      name: " Flour",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <footer className="footer">
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <img src={product.img} alt="" />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </footer>
  );
}

export default Footer;
