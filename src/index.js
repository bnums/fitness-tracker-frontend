import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { AuthProvider } from "./context/AuthProvider";

const queryClient = new QueryClient();

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <App />
        </AuthProvider>
      </QueryClientProvider>
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);
