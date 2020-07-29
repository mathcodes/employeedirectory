import React, {TOJSON} from "./../node_modules/react";
import Main from "./components/Main.js";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Header />
        <Main />
      </Wrapper>
    </div>
  );
}

export default App;

