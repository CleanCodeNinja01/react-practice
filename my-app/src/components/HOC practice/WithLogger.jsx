// HOC
// logs props whenever the component renders

const WithLogger = (WrappedComponent) => {
    return function EnhancedComponent(props){
        console.log(`Rendering ${WrappedComponent.name} with props:`, props);

        return <WrappedComponent {...props}/>
    }
}

export default WithLogger;