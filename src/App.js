import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const user = false; //eslint-disable-line no-unused-vars
  return (
    <Router>
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/single/*" element={<Single />}></Route>
        <Route path="/settings" element={<Settings />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/write" element={<Write />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
