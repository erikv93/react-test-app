
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from "./components/ui/provider"
import { PricePerKilo } from './pages/priceperkilo';
import './App.css'
import { RoombaCalculator } from './pages/roombacalculator';

function App() {
  function Home() {
    return <h1> home </h1>;
  }


  return (
    <Provider>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/priceperkilo">Prijs per kilo berekenen</Link> |
          <Link to="/roombacalculator">Roomba's berekenen</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/priceperkilo" element={<PricePerKilo />} />
          <Route path="/roombacalculator" element={<RoombaCalculator />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
