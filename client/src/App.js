import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import POSPage from "./pages/POSPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pos" element={<POSPage />} />
      </Routes>
    </Router>
  );
}

export default App;
