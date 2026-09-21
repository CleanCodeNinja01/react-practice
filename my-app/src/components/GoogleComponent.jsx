const GoogleComponent = () => {
    const containerStyle = {
        color: "#4285F4",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        margin: "20px"
    }

    const paraStyle = {
        color: "#34A853",
        fontSize: "1.5rem",
    }
    return (
        <div style={containerStyle}>
            <h1>Google</h1>
            <p style={paraStyle}>Organizing the world's information.</p>
        </div>
    )

}

export default GoogleComponent;