const SpeedMessage = ({speed}) => {
    const overSpeedingLimit = 70;

    const message = speed < overSpeedingLimit ? (<p>Your speed is okay!</p>) : (<p>You're going too fast!</p>)

    const backgroundColor = speed < overSpeedingLimit ? "green" : "red";

    return (
        <div style={{backgroundColor}}>
            <p>
                Your speed is {speed} mph.
                {message}
            </p>
        </div>
    );
}

export default SpeedMessage;