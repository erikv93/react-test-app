
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Provider } from "./components/ui/provider"
import { PricePerKilo } from './pages/priceperkilo';
import './App.css'

function App() {
  function Home() {
    return <h1> home </h1>;
  }


  return (
    <Provider>
      <BrowserRouter>
        <nav>
          <Link to="/">Home</Link> |{" "}
          <Link to="/priceperkilo">Prijs per kilo berekenen</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/priceperkilo" element={<PricePerKilo />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    // <>
    //   {/* <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p> */}
    // </>
  )
}

export default App
