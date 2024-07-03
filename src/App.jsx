// Importing images
// import headImg1 from "https://i.ibb.co/HB8T6tX/image.png";
import headImg2 from "./assets/react-core-concepts.png";
import { CORE_CONCEPTS } from "./data.js";

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
function Header() {
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

// Props test
function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

// Main App entry point
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
