import './Design.css';

function Design() {
    return (
      <div className='d-flex gap-2 col-7 mx-auto vh-100 align-items-center'>
        <div className='d-grid'>
            <h1 className='col-7 pb-4 fw-bold' style={{ fontSize: '45px' }}>Design Your Comfort Zone</h1>
            <h3 className='col-9 pb-1 text-secondary' style={{ fontSize: '20px' }}>Lorem ipsum, dolor sit amet consectetur</h3>
            <h3 className='col-9 pb-1 text-secondary' style={{ fontSize: '20px' }}>adipisicing elit. Iusto, at sed omnis</h3>
            <h3 className='col-9 pb-1 text-secondary' style={{ fontSize: '20px' }}>corporis doloremque possimus velit! </h3>
            <h3 className='col-9 pb-1 text-secondary' style={{ fontSize: '20px' }}>Repudiandae nisi odit, aperiam odio ducimus,</h3>
            <h3 className='col-9 pb-1 text-secondary' style={{ fontSize: '20px' }}>obcaecati libero et quia tempora excepturi</h3>
            <h3 className='col-9 pb-1 text-secondary' style={{ fontSize: '20px' }}>quis alias?</h3>
            <div className='pt-4'>
                <button type="button" class="btn btn-outline-primary col-3">Shop Now</button>
            </div>
        </div>
        <div className='d-grid ms-auto'>
        <img src={require('../asset/WeChat7b55fb7ea25e90f6fa1eab3bbe4d66ae.jpg')} alt="logo" height="500px" />
        </div>
        
      </div>
    );
  }
  
  export default Design;