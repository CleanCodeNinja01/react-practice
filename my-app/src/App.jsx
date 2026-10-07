// import { Footer } from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
// import PropertyList from "./components/PropertyList/PropertyList";
// import { Title } from "./components/Title/Title";
// import properties from "./data/properties";
import "./App.css";
import Tab from "./components/Tabs/Tab";
import TabList from "./components/Tabs/TabList";
import TabPanel from "./components/Tabs/TabPanel";
// import ControlledInput from "./components/ControlledInput/ControlledInput";
import { Tabs } from "./components/Tabs/Tabs";
// import Toggle from "./components/Toggle";
// import CounterUseRef from "./components/CounterUseRef";
// import Weather from "./components/Weather/Weather";
// import FruitsList from "./components/FruitsList";
// import UseRefTest from "./components/UseRefTest";
// import MyForm from "./components/MyForm/MyForm";
// import Timer from "./components/Timer/Timer";
// import UseRefTest from "./components/UseRefTest";
// import TodoList from "./components/TodoList/TodoList";
// import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
// import Button from "./components/Button/Button";
// import Counter from "./components/Counter/Counter";
// import User from "./components/User/User";

const App = () => {
  // const handleClick = ()=>console.log(`hey saleha! be healthy ${0}`)

  return (
    <div className="app">
      {/* <Counter/> */}
      {/* <User/> */}
      {/* <ShoppingCart/> */}
        {/* <TodoList/> */}
        {/* <Timer/> */}
        {/* <UseRefTest/> */}
      {/* <MyForm/> */}
      {/* <FruitsList/> */}
        {/* <CounterUseRef/> */}
        {/* <Weather/> */}
        {/* <Toggle>
          {({on, toggleButton})=>(
            <button onClick={toggleButton}>
              {on ? "✅ Enabled" : "❌ Disabled"}
            </button>
          )}
        </Toggle> */}
        {/* <ControlledInput/> */}
        <>
          <h1>Compound Components Example: Tabs</h1>
          <Tabs defaultIndex={0}>
            {/* Tab list goes here */}
            <TabList>
              <Tab index={0}>
                Home
              </Tab>
              <Tab index={1}>
                Profile
              </Tab>
              <Tab index={2}>
                Settings
              </Tab>
            </TabList>
            <TabPanel index={0}>
              <p>Welcome to the Home tab!</p>
            </TabPanel>
            <TabPanel index={1}>
              <p>Here is your Profile information!</p>
            </TabPanel>
            <TabPanel index={2}>
              <p>Adjust your Settings here!</p>
            </TabPanel>
          </Tabs>
        </>
    </div>
  )
}

// Export the App component
export default App;
