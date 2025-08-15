import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
// import Builder from './pages/Builder';
import Inventory from './pages/Inventory';
// import SavedFits from './pages/SavedFits';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <main className="p-8">
          <Routes>
            <Route path="/" element={<Builder />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/saved-fits" element={<SavedFits />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;