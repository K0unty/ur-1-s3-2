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
  return (
    <header>
      <img src="https://i.ibb.co/HB8T6tX/image.png" alt="Stylized atom" />
      <h1>Weapon Essentials</h1>
      <p>
        <span className="dynamic-text">
          {reactDescriptions[getRandomInt(4)]}
        </span>
        concepts you will need for almost any app you are going to build!
      </p>
    </header>
  );
}

// Main App entry point
function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
