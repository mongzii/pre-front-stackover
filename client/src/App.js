import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LeftSide from "./components/LeftSide";
import RightSide from "./components/RightSide";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import FootBar from "./components/FootBar";
import Questions from "./pages/Questions";
import Tags from "./pages/Tags";
import Users from "./pages/Users";
import Companies from "./pages/Companies";
import LogIn from "./pages/LogIn";
import SingUP from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <LeftSide />
      <RightSide />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/tags" element={<Tags />} />
        <Route path="/users" element={<Users />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SingUP />} />
      </Routes>
      <FootBar />
    </BrowserRouter>
  );
}

export default App;
