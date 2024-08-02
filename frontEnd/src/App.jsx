// import useMediaQuery from './hooks/useMediaQuery'
import Header from './components/Header';
import Navbar from './components/NavBar';
import Banner from './components/Banner';
import HowItWorks from './components/HowItWorks';
import { Route, Routes } from 'react-router-dom';
import ItemList from './components/ItemList';
import Footer from './components/Footer';
import ItemShowCard from './components/ItemShowCard';
import { useState } from 'react';
import WardrobeManager from './components/WardrobeManager';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  return (
    <div
      className="app white"
      style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
    >
      <Banner />
      <Header />
      <Navbar />
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<HowItWorks />} />
          <Route
            path="/api/clothing/:category"
            element={
              <ItemList isLoading={isLoading} setIsLoading={setIsLoading} />
            }
          />
          <Route path="/api/items/:clothing_id" element={<ItemShowCard />} />
          <Route
            path="/api/wardrobemanager/20lsntdw24"
            element={<WardrobeManager />}
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
