import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Employee from "./pages/Employee";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          {/* <Route path="*" element={<Error />}/> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
