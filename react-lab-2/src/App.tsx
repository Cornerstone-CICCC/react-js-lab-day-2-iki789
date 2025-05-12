import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Todos from "./pages/Todos";
import ContextProviders from "./context/ContextProviders";

function App() {
  return (
    <BrowserRouter>
      <ContextProviders>
        <div>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Login />} />
              <Route path="dashboard" element={<Todos />} />
            </Route>
          </Routes>
        </div>
      </ContextProviders>
    </BrowserRouter>
  );
}

export default App;
