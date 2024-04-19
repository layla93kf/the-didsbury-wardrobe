import useMediaQuery from "./hooks/useMediaQuery";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import HowItWorks from "./components/HowItWorks";

function App() {
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  return (
    <div className="app white">
      <Header />
      <Navbar />
      <HowItWorks />
    </div>
  );
}

export default App;
