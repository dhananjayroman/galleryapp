import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoveGallery from "./components/LoveGallery";
import Gallery from "./components/Gallery";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoveGallery />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
    </Router>
  );
}

export default App;







