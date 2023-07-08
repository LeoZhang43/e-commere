import './FeaturedProducts.css';

function CustomFurniture() {
    return (
        <div className='' style={{height: '470px', background: '#a393a5'}}>
            <div className='d-grid mx-auto justify-content-center align-items-center' style={{height: '670px'}}>
                <div className='d-flex mt-5'>
                    <h3 className='fw-bold' style={{ fontSize: '30px' }}>Custom Furniture Built Only For You</h3>
                    <div className='d-grid justify-content-end col-8'>
                        <h5 className='py-1' style={{ fontSize: '15px' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum</h5>
                        <h5 className='py-1' style={{ fontSize: '15px' }}>debitis consectetur reprehenderit non aliquam voluptates dolore aut vero</h5>
                        <h5 className='py-1' style={{ fontSize: '15px' }}>consequuntur.</h5>
                    </div>
                </div>
                {/* <div className='d-flex'>
                    <div className='d-grid bi bi-square-fill mx-4 justify-content-center align-items-center' style={{ fontSize: '360px', color: '#3c545d' }}>
                        <div className='' style={{position: 'absolute'}}>
                            <i class="bi bi-diamond-fill" style={{ fontSize: '50px', color: '#5c5d90'}}></i>
                            <p className='fw-bold' style={{ fontSize: '30px', color:'black'}}>Mission</p>
                            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</h5>
                        </div>
                    </div>
                    <div className='d-grid bi bi-square-fill mx-4 justify-content-center align-items-center' style={{ fontSize: '360px', color: '#3c545d' }}>
                        <div className='' style={{position: 'absolute'}}>
                            <i class="bi bi-circle-fill" style={{ fontSize: '50px', color: '#5c5d90'}}></i>
                            <p className='fw-bold' style={{ fontSize: '30px', color:'black'}}>Mission</p>
                            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</h5>
                        </div>
                    </div>
                    <div className='d-grid bi bi-square-fill mx-4 justify-content-center align-items-center' style={{ fontSize: '360px', color: '#3c545d' }}>
                        <div className='' style={{position: 'absolute'}}>
                            <i class="bi bi-box" style={{ fontSize: '50px', color: '#5c5d90'}}></i>
                            <p className='fw-bold' style={{ fontSize: '30px', color:'black'}}>Mission</p>
                            <h5>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</h5>
                        </div>
                    </div>
                </div> */}
            
                <div className='d-flex justify-content-center mt-0'>
                    <div class="d-flex justify-content-center align-items-center square" style={{width: '360px', height: '300px'}}>
                        <div class="text-center">
                            <i class="bi bi-diamond-fill text-white" style={{fontSize: '40px'}}></i>
                            <p class="fw-bold" style={{fontSize: '25px'}}>Mission</p>
                            <p class="" style={{fontSize: '20px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center square mx-5" style={{width: '360px', height: '300px'}}>
                        <div class="text-center">
                            <i class="bi bi-circle-fill text-white" style={{fontSize: '40px'}}></i>
                            <p class="fw-bold" style={{fontSize: '25px'}}>Vision</p>
                            <p class="" style={{fontSize: '20px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                        </div>
                    </div>
                    <div class="d-flex justify-content-center align-items-center square" style={{width: '360px', height: '300px'}}>
                        <div class="text-center">
                            <i class="bi bi-box text-white" style={{fontSize: '40px'}}></i>
                            <p class="fw-bold" style={{fontSize: '25px'}}>History</p>
                            <p class="" style={{fontSize: '20px'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nisi</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
export default CustomFurniture;