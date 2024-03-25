import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome/Welcome.jsx";
import Login from "./pages/Auth/login/Login.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Welcome />} />
            <Route path="/login" element={<Login />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
