// import headImg1 from "https://i.ibb.co/HB8T6tX/image.png";
import headImg2 from "../../assets/react-core-concepts.png";

// importing css - Code taken from index.css and in Header.css
import "./Header.css";

// Dynamic Content array
const reactDescriptions = [
  "🍑BootySniff",
  "👙PantySniff",
  "🙆‍♀️ArmpitSniff",
  "👃🍑InHerBum",
  "👃😹NoseInHerPus",
];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Header Function which you defined
export default function Header() {
  const firstWord = reactDescriptions[getRandomInt(4)];

  return (
    <header>
      <img src="https://i.ibb.co/HB8T6tX/image.png" alt="boty" />
      <img src={headImg2} alt="Stylized atom" />
      <h1>Weapon Essentials</h1>
      <p>
        <span className="dynamic-text">{firstWord}</span>
        concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}
