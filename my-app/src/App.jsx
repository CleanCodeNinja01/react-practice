import AppleComponent from "./components/AppleComponent";
import GoogleComponent from "./components/GoogleComponent";
import AmazonComponent from "./components/AmazonComponent";

const App = () => {
  // both below are identical - one is in JSX and the next one is in JS
  // return <h1>React is fun!</h1>
  // return React.createElement('h1', null, 'React is fun')

  // const userName = "Saleha";
  // const greetUser = (userName) => `Salaams ${userName}`
  // const userInfo = {
  //   name: "Ahmed",
  //   age: "32",
  //   location: "Seattle"
  // }

  // const titleStyle = {
  //   color: "blue",
  //   fontSize: "24px",
  //   textAlign: "center",
  //   margin: "20px 0"
  // }

  return (
    <>
      {/* <p>Hey {userName}</p>
      <p>Greeting: {greetUser(userName)}</p>
      {/* <button onClick={greetUser(userName)}>Greet me!</button> */}
      {/* <p>
        Age: {userInfo.age} location: {userInfo.location}
      </p>
      <h1 style={titleStyle}>Welcome to React!</h1> */}
      <GoogleComponent/>
      <AppleComponent/>
      <AmazonComponent/>
    </>
  )

}

// Export the App component
export default App;