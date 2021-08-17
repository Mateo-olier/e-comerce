import logo from "./logo.svg";
import { BrowserRouter, Route } from "react-router-dom";

import "./App.css";
import Header from "./component/principal/Header";
import Main from "./component/principal/Main";
import SectionCard from "./component/principal/SectionCard";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Main></Main>
        <SectionCard></SectionCard>
      </BrowserRouter>
    </div>
  );
}

export default App;
