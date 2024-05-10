// import useMediaQuery from './hooks/useMediaQuery'
import Header from './components/Header'
import Navbar from './components/NavBar'
import Banner from './components/Banner'
import HowItWorks from './components/HowItWorks'
import TopPicks from './components/TopPicks'
import { Route, Routes } from 'react-router-dom'
import ItemList from './components/ItemList'
import Footer from './components/Footer'

function App() {
  // const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");
  return (
    <div className="app white">
      <Banner />
      <Header />
      <Navbar />

      <Footer />

      <Routes>
        <Route path="/" element={<HowItWorks />} />
        <Route path="/api/clothing/:category" element={<ItemList />} />
      </Routes>
    </div>
  )
}

export default App
