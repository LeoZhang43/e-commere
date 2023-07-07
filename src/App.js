import logo from './logo.svg';
import './App.css';
import Navbar from './navbarComponent/navbar';
import Design from './DesignYourComfortZone/Design';
import FeaturedProducts from './Featured Products/FeaturedProducts';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div>
      <Navbar />
      <Design />
      <FeaturedProducts />
    </div>
  );
}

export default App;
