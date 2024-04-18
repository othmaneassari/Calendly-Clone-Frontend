import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import HeroSection from "./components/HomePage/HeroSection";
import { Route, Routes } from "react-router";
import Form from "./Form";
import Guide from "./components/Guide/Guide";

function App() {
  return (
    <main>
      <Routes>
        {/* <Route path="/" element=<Form /> /> */}
        <Route path="/" element=<HeroSection /> />
        <Route path="/Login" element=<Login /> />
        <Route path="/Register" element=<Register /> />
        <Route path="/Dashboard" element=<Dashboard /> />
        <Route path="/Guide" element=<Guide /> />
      </Routes>
    </main>
  );
}

export default App;
