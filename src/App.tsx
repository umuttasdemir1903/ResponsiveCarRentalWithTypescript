import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route  path="/" element={<MainPage/>}/>
        <Route  path="/sign-up" element={<SignUp/>}/> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
