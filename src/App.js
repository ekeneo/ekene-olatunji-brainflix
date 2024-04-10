import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
import HomePage from "./pages/HomePage/HomePage";
import UploadPage from "./pages/UploadPage/UploadPage"
import './App.scss';

function App() {
  return (
      <BrowserRouter>
          {/* <Header /> */}
          <Routes>
              <Route path="/" element={<HomePage />} />;
              <Route path="/video/:videoId" element={<HomePage />} />;
              <Route path="/video" element={<HomePage />} />;
              <Route path="/upload" element={<UploadPage />} />;
          </Routes>
      </BrowserRouter>
  );
}

export default App;
