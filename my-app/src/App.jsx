// import { Footer } from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
// import PropertyList from "./components/PropertyList/PropertyList";
// import { Title } from "./components/Title/Title";
// import properties from "./data/properties";
import { useState } from "react";
import "./App.css";
import Rating from "./components/Rating/Rating";
import WelcomeMessage from "./components/WelcomeMessage";
import MemoizedFunctionsParent from "./components/MemoizedFunctions/MemoizedFunctionsParent";
// import DataFetcherExamples from "./components/DataFetcher/DataFetcherExamples";
// import ButtonToolTip from "./components/Prop-getters-props-colls/ButtonToolTip";
// import Goodbye from "./components/HOC practice/Goodbye";
// import Hello from "./components/HOC practice/Hello";
// import WithLogger from "./components/HOC practice/WithLogger";
// import Tab from "./components/Tabs/Tab";
// import TabList from "./components/Tabs/TabList";
// import TabPanel from "./components/Tabs/TabPanel";
// // import ControlledInput from "./components/ControlledInput/ControlledInput";
// import { Tabs } from "./components/Tabs/Tabs";
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

// const HelloWithLogger = WithLogger(Hello);
// const GoodbyeWithLogger = WithLogger(Goodbye);

const App = () => {
  // const handleClick = ()=>console.log(`hey saleha! be healthy ${0}`)

  const [user, setUser] = useState("");
  const [location, setLocation] = useState("")

  return (
    <>
      {/* <h1>Higher Order Components (HOC)</h1>
      <HelloWithLogger name="Alice" />
      <GoodbyeWithLogger name="Alice" /> */}
      {/* <DataFetcherExamples/> */}
      {/* <ButtonToolTip/> */}
      {/* <h1>Controlled props pattern - rating</h1>
      <h3>Uncontrolled rating with defaultVal: 3</h3>
      <Rating
        defaultVal={3}
        onChange={(val)=> console.log("Uncontrolled ->", val)}
      />
      <Rating
        value={3}
        // onChange={(val)=> console.log("Uncontrolled ->", val)}
      /> */}


      <h1>React performance!</h1>

      {/* <WelcomeMessage/>

      <div>
        <label htmlFor="">
          User name: {' '}
          <input type="text" 
            value={user}
            onChange={(e)=>setUser(e.target.value)}
            placeholder="Enter your name"
          />

        </label>
      </div> */}

      <MemoizedFunctionsParent/>

    </>
  );
}

// Export the App component
export default App;
