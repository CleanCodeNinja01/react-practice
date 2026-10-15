import "./HeavyComponent.css";

const HeavyComponent = () => {
    console.log("HeavyComponent rendered!")
    return (
        <div className="heavy-container">
            <h2>I am a heavy component!</h2>
            <p>Loaded immediately with all css!</p>
        </div>
    )
}

export default HeavyComponent;