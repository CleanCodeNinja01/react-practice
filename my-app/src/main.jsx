import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.jsx"
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"
import {Provider} from "react-redux"
import {store } from "./store"

const queryClient = new QueryClient();

// entry point of react app is root
const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    {/* <QueryClientProvider client={queryClient}>
      <App/>
    </QueryClientProvider> */}
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
)
