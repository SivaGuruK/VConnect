import { BrowserRouter,Routes, Route } from "react-router-dom"
import SignInComp from "./components/SignInComp"
import SignUpComp from "./components/SignUpComp";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignInComp />} />
        <Route path="/" element={<SignUpComp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
