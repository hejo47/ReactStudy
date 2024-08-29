/* CSS */
import "./css/App.css";
/* Component */
import Header from "./components/common/Header";
import FloatMenu from "./components/common/FloatMenu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <FloatMenu />
        <Routes>
          <Route path='/' element={<></>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
