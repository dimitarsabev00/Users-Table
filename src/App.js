import AppContainer from "./pages/AppContainer/AppContainer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser/CreateUser";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AppContainer />} />
        <Route path="/create-user" element={<CreateUser />} />
      </Routes>
    </Router>
  );
}

export default App;
