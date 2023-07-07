import './navbar.css';

function Navbar() {
    return (
    <div className='d-grid gap-2 col-8 mx-auto'>
      <nav className="navbar navbar-expand-lg bg-white py-0">
        {/* <img src='../asset/WeChat8a53884d01cf9c6557238b923622abb1.jpg' alt="logo" height="70px" /> */}
        <img src={require('../asset/WeChat8a53884d01cf9c6557238b923622abb1.jpg')} alt="logo" height="70px" />
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active fs-5 px-4" aria-current="page" href="http://localhost:3000/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 px-4" href="http://localhost:3000/">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 px-4" href="http://localhost:3000/">Products</a>
              </li>
            </ul>
            <ul className="navbar-nav m-0 mb-2 mb-lg-0">
              <li className='d-flex align-items-center'>
                <i class="bi bi-cart" style={{ fontSize: '30px' }}></i>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 px-2" href="http://localhost:3000/">Cart</a>
              </li>
              <li className='d-flex align-items-center'>
                <i class="bi bi-person-plus-fill" style={{ fontSize: '30px' }}></i>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5 px-2" href="http://localhost:3000/">Login</a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
    </div>
    );
  }
  
export default Navbar;