import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/home';
import Detail from './pages/Detail';
import Basket from './pages/basket';
import Country from './pages/country';

function App() {

  return (
    <div className="App">
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="detail/:id" element={<Detail/>} />
        <Route path="/basket"element={<Basket/>} ></Route>
        <Route path="/country"element={<Country/>} ></Route>
      </Routes>
    </BrowserRouter>
      </>
    </div>
  );
}
export default App;
