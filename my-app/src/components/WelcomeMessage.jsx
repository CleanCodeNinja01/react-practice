import React from "react";

const WelcomeMessage = ({user}) => {

    console.log("Welcome Message rendered")

    return (
        <div>
            <h3>
                Welcome {user && ", "}
                {user}!
            </h3>
        </div>
    )
}

export default React.memo(WelcomeMessage);