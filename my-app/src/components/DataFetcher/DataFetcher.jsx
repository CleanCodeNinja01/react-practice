import { useEffect, useState } from "react";

const DataFetcher = ({url, children}) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)


    useEffect(()=>{
        let isMounted = true;

        fetch(url)
            .then((res)=>{
                if(!res.ok) {
                    throw new Error(`HTTP error! status: ${res.status}`)
                }
                return res.json();
            })
            .then((json)=>{
                if(isMounted){
                    setData(json);
                    setLoading(false);
                }
            })
            .catch((err)=>{
                if(!isMounted){
                    setError(err.message)
                    setLoading(false)
                }
            })
        return ()=>{
            isMounted = false;
        };
    }, [url])

    // object passed to the children function
    return children({
        data,
        loading,
        error
    })

}

export default DataFetcher;