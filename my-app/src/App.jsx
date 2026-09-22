import { Footer } from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import PropertyList from "./components/PropertyList/PropertyList";
import { Title } from "./components/Title/Title";
import "./App.css";

const App = () => (
  <div className="app">
    <Header/>
    <main>
      <Title/>
      <PropertyList/>
    </main>
    <Footer/>
  </div>
)

// Export the App component
export default App;
