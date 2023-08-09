import React from "react";
import GifListContainer from "../containers/GifListContainer";
import NavBar from "./NavBar";


function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
    </div>
  );
}

export default App;
