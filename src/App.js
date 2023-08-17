import { useEffect, useState } from "react";
import { client } from "./lib/client";
import Navbar from "./components/global/Navbar/Navbar";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div style={{maxWidth: '85%', margin: '0 auto'}}>
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
