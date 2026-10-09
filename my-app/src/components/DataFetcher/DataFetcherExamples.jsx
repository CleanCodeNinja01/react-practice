// children of DataFetcher

import DataFetcher from "./DataFetcher";

const DataFetcherExamples = () => {
    return (
        <DataFetcher url="https://jsonplaceholder.typicode.com/users">
            {
                ({data, loading, error})=>{
                    if (loading) return <p>Loading user...</p>;
                    if (error) return <p style={{color: 'red'}}>Error!</p>
                    if (!Array.isArray(data)) return <p>Unexpected data format!!</p>

                    return (
                        <ul>
                            {data.map((dataUser)=>{
                                return <li key={dataUser.id}>{dataUser.name}</li>
                            })}
                        </ul>
                    )
                }
            }
        </DataFetcher>
    )
}

export default DataFetcherExamples;