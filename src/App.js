import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Dashboard from "./components/Dashboard/Dashboard";
import HeroSection from "./components/HomePage/HeroSection";
import { Route, Routes } from "react-router";
import Guide from "./components/Guide/Guide";
import AuthProvider from "./components/auth/JWT Management/AuthProvider";
import Test from "./components/auth/Routes/Test";

function App() {
  return (
    <AuthProvider>
      <main>
        <Test />
      </main>
      ;
    </AuthProvider>
  );
}

export default App;
