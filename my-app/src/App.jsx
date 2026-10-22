// import { Footer } from "./components/Footer/Footer";
// import Header from "./components/Header/Header";
// import PropertyList from "./components/PropertyList/PropertyList";
// import { Title } from "./components/Title/Title";
// import properties from "./data/properties";
import { lazy, Suspense, useState } from "react";
import "./App.css";
import Rating from "./components/Rating/Rating";
import WelcomeMessage from "./components/WelcomeMessage";
import MemoizedFunctionsParent from "./components/MemoizedFunctions/MemoizedFunctionsParent";
import VirtualizedList from "./components/VirtualizedList/VirtualizedList";
const HeavyComponent = lazy(()=> import ("./components/HeavyComponent/HeavyComponent"));
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

import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";
import Products from "./components/Products/Products";
import Courses from "./components/Courses/Courses";
import Display from "./components/Display/Display";
import CounterZ from "./components/CounterZ/CounterZ";
import DisplayRTK from "./components/DisplayRTK/DisplayRTK";
import CounterRTK from "./components/CounterRTK/CounterRTK.jsx";

const Home = () => 
  <div>
    <h2>🏠 Home</h2>
    <p>Welcome to the react query demo!</p>
  </div>

const About = () => <h2>About</h2>
const Contact = () => <h2>Contact</h2>
const Services = () => <h2>Services</h2>
const NotFound = () => <h2>Not found!</h2>

const App = () => {
  // const handleClick = ()=>console.log(`hey saleha! be healthy ${0}`)

  const [user, setUser] = useState("");
  const [location, setLocation] = useState("")

  const navLinkStyle = {};

  const content = (
    <div style={{padding: "2rem"}}>
      <h1>udemy courses</h1>
      <p>data fetched from the api: </p>
      <Courses/> 
   </div>
  )

  return (
    <>
      {/* <BrowserRouter>
        <nav style={{padding: "1rem", borderBottom: "1px solid #ccc"}}>
          <Link to="/" style={{marginRight: "1rem"}}> Home</Link>
          <Link to="/courses">Courses</Link>
        </nav>
        <Routes>
          <Route
            path="/"
            element={<Home/>}
          />
          <Route
            path="/courses"
            element={content}
          />
        </Routes>
      </BrowserRouter> */}
      {/* <div>
        <h1>Zustand global state!</h1>
        <CounterZ/>
        <Display/>
      </div> */}
      <div>
        <h1>RTK global state!</h1>
        <CounterRTK/>
        <DisplayRTK/>
      </div>
    </>
  );
}

// Export the App component
export default App;
