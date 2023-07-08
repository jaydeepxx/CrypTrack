import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Crypto from "./pages/Crypto";
import Trending from "./pages/Trending";
import Saved from "./pages/Saved";
import CryptoDetails from "./components/CryptoDetails";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/" element={<Crypto />}>
            <Route path=":coinId" element={<CryptoDetails />} />
          </Route>
          <Route path="/trending" element={<Trending />}>
            <Route path=":coinId" element={<CryptoDetails />} />
          </Route>
          <Route path="/saved" element={<Saved />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
