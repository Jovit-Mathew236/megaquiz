import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Megaqiuz from './components/Megaqiuz';





function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes >
          <Route path='/megaquiz' element={<Megaqiuz/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
