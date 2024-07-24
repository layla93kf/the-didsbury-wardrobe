import Header from './components/Header';
import WardrobeManager from './components/WardrobeManager';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div
      className="app white"
      style={{ display: 'flex', flexDirection: 'column' }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<WardrobeManager />} />
      </Routes>
    </div>
  );
}

export default App;
