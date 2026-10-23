// EB must be class components

import React from "react"

class ErrorBoundary extends React.Component {
    constructor(props){
        super(props)
        this.state = {hasError: false}
    }

    static getDerivedStateFromError(error){
        return { hasError: true }
        // console.error("")
    }

    // log error info after child component throws an error
    componentDidCatch(error, info){
        console.error("Error caught by EB: ", error, info);
    }

    // render fallback UI or normal children
    render(){
        if(this.state.hasError){
            return <h2 style={{color: "red"}}>Something went wrong</h2>
        }
        //render child components normally if no error occured
        return this.props.children;
    }
} 

export default ErrorBoundary;