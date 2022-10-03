import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateUser from "./pages/CreateUser/CreateUser";
import { AppContextProvider } from "./context/AppContextProvider";

function App() {
  return (
    <AppContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/create-user" element={<CreateUser />} />
        </Routes>
      </Router>
    </AppContextProvider>
  );
}

export default App;
