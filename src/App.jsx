// Importing images
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import { CoreConcept } from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";

// Main App entry point
function App() {
  let tabContent = "Click Buta";

  // onSelect Function exported from TabButton.js
  function handleSelect(selectedButton) {
    // selectedButton => 'components', 'jsx', 'props', 'state'
    tabContent = selectedButton;
  }

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
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleSelect("components")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleSelect("JSX")}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect("Props")}>Props</TabButton>
            <TabButton onSelect={() => handleSelect("State")}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
