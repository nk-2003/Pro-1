import Home from "./Home"
import Products from "./Products"
import AboutUs from "./AboutUs"
import { HashRouter as Router, Routes, Route, Link} from 'react-router-dom'
import "./App.css"
function App() {
  return (
    <div className="app-main">
      <Router> 
        <ol className="Navbar">
          <div className="title">
            <li><h1>Retro...</h1></li>
          </div>  
          <div className="others">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/aboutUs">AboutUs</Link></li>
          </div> 
        </ol>
        <Routes>
          <Route path="/" element={ <Home/> }/>
          <Route path="/products" element={ <Products/> }/>
          <Route path="/aboutus" element={ <AboutUs/> }/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
