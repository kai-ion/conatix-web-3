import styles from "./style"
import { Navbar, Hero, Footer } from "./components"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import News from "./pages/News"
import Home from "./pages/Home"
import Company from "./pages/Company"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import Mascot from "./pages/Mascot"
import Differentiation from "./pages/Differentiation"



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/company" element={<Company />} />
          <Route path="/product" element={<Product />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id"></Route>
          <Route path="/differentiation" element={<Differentiation />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/mascot" element={<Mascot />} />
        </Routes>
      </BrowserRouter>
    </div>  
  )
}


export default App
