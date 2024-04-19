import useMediaQuery from "./hooks/useMediaQuery";
import Header from "./components/Header";
import Navbar from "./components/NavBar";
import HowItWorks from "./components/HowItWorks";
import TopPicks from "./components/TopPicks";

function App() {
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  return (
    <div className="app white">
      <Header />
      <Navbar />
      <TopPicks />
      <HowItWorks />
    </div>
  );
}

export default App;
