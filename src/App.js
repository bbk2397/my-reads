import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./components/list/List";
import Search from "./components/search/Search";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route 
            exact
            path="/"
            element={<List />}>
          </Route>
          <Route
            path="/search"
            element={<Search />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 
