import PropTypes from 'prop-types'

// const PurpleComponent = () => (
//   <div style={{color: 'purple'}}>
//     <p>This component is purple</p>
//   </div>
// )

// const OrangeComponent = () => (
//   <div style={{color: 'orange'}}>
//   <p>This component is orange</p>
// </div>
// )

// const YellowComponent = () => (
//   <div style={{color: 'yellow'}}>
//   <p>This component is yellow</p>
// </div>
// )

const ColorComponent = ({color}) => (
  <div style={{color: color}}>
  <p>This component is {color}</p>
</div>
)

ColorComponent.propTypes = {
  color: PropTypes.string.isRequired,
}

const App = () => {

  return (
    <>
      {/* <PurpleComponent/>
      <OrangeComponent/>
      <YellowComponent/> */}

      <ColorComponent
        color="purple"
      />
    </>
  )

}

// Export the App component
export default App;
