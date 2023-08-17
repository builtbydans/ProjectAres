import TickerBar from "./components/features/TickerBar/TickerBar";
import Navbar from "./components/global/Navbar/Navbar";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <div style={{margin: '0 auto'}}>
      <TickerBar />
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
