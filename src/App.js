import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout.js";
import Kezdolap from './pages/Kezdolap';
import Urlap from './pages/Urlap';
import Adatok from './pages/Adatok';
import NoPage from './pages/NoPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Kezdolap />} />
          <Route path="urlap" element={<Urlap />} />
          <Route path="adatok" element={<Adatok />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;