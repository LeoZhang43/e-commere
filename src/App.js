import logo from './logo.svg';
import './App.css';
import Navbar from './navbarComponent/navbar';
import Design from './DesignYourComfortZone/Design';
import FeaturedProducts from './Featured Products/FeaturedProducts';
import CustomFurniture from './Featured Products/CustomFurniture';
import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div>
      <Navbar />
      <Design />
      <FeaturedProducts />
      <CustomFurniture />
    </div>
  );
}

export default App;
