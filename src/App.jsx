import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Calendar from "./pages/Calendar.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/calendar" element={<Calendar />} />
      </Routes>
    </Router>
  );
}

export default App;
