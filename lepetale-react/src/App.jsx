import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Products from "./components/Products";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Products />
      <Cart />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
