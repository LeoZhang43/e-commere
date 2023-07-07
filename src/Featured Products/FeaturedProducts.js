import './FeaturedProducts.css';

function FeaturedProducts() {
    return (
      <div className='d-grid bg-body-secondary gap-2 mx-auto align-items-center justify-content-center' style={{height: '620px'}}>
        <div className='d-grid justify-content-center fw-bold pt-5' style={{ fontSize: '45px' }}>
          Featured Products
        </div>
        <div className='d-flex'>
          <div className='px-4'>
            <img src={require('../asset/WeChat3bacfb7f6160961104f5ef083a67da05.jpg')} alt="logo" height="250px" />
            <h6 className='d-flex'>Entertainment Center<p className='ms-auto text-warning'>$599.99</p></h6>
          </div>
          <div className='px-4'>
            <img src={require('../asset/WeChat08838b708a57e9a7a3c72087fa330921.jpg')} alt="logo" height="250px" />
            <h6 className='d-flex'>High-back Bench<p className='ms-auto text-warning'>$399.99</p></h6>
          </div>
          <div className='px-4'>
            <img src={require('../asset/WeChat09e7e2cf8cd36860479ff768752ed082.jpg')} alt="logo" height="250px" />
            <h6 className='d-flex'>Modrden Bookshelf<p className='ms-auto text-warning'>$319.99</p></h6>
          </div>
        </div>
        <div className='d-grid pt-4 justify-content-center'>
          <button type="button" class="btn btn-warning">ALL PRODUCTS</button>
        </div>
      </div>
    );
  }
  
  export default FeaturedProducts;