import logo from "./logo.svg";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Header from "./component/principal/Header";
import Main from "./component/principal/Main";
import SectionCard from "./component/principal/SectionCard";
import ProductScreen from "./Screen/ProductScreen";
import HomeScreen from "./Screen/HomeScreen";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" component={HomeScreen} exact></Route>
        <Route path="/product/:id" component={ProductScreen}></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
