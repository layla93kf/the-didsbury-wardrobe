import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Header from "./components/Header";
import Navbar from "./components/NavBar";

function App() {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  return (
    <div className="app white">
      <Header />
      <Navbar />
    </div>
  );
}

export default App;
