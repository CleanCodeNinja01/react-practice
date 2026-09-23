// import { Footer } from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
// import PropertyList from "./components/PropertyList/PropertyList";
// import { Title } from "./components/Title/Title";
// import properties from "./data/properties";
import "./App.css";
import Button from "./components/Button/Button";

const App = () => {
  const handleClick = ()=>console.log(`hey saleha! be healthy ${0}`)

  return (
    <div className="app">
    <Button
      onButtonClick={handleClick}
    >
      Log
    </Button>
    {/* <Header/>
    <main>
      <Title/>
      <PropertyList
        properties={properties}
      />
    </main>
    <Footer/> */}
  </div>
  )
}

// Export the App component
export default App;
