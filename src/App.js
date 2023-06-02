import React, { useState } from 'react';
import './App.css'; 
function App() {

const[initialValue,setinitialValues]=useState(0);
   const handleIncrement=(e)=>{
      if(e.target.innerText==="Add to cart") {
        setinitialValues(initialValue+1);
        e.target.innerText="Remove to cart";
        }
      else {
        setinitialValues(initialValue-1);
        e.target.innerText="Add to cart";
        }
   }
return (
    <div>
      
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
          <a className="navbar-brand" href="#!">Start Bootstrap</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                  <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Home</a></li>
                  <li className="nav-item"><a className="nav-link" href="#!">About</a></li>
                  <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Shop</a>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                          <li><a className="dropdown-item" href="#!">All Products</a></li>
                          <li><hr className="dropdown-divider" /></li>
                          <li><a className="dropdown-item" href="#!">Popular Items</a></li>
                          <li><a className="dropdown-item" href="#!">New Arrivals</a></li>
                      </ul>
                  </li>
              </ul>
              <form className="d-flex">
                  <button className="btn btn-outline-dark" type="submit">
                      <i className="bi-cart-fill me-1"></i>
                      Cart
                      <span className="badge bg-dark text-white ms-1 rounded-pill">{initialValue}</span>
                  </button>
              </form>
          </div>
      </div>
  </nav>
  
  <header className="py-5">
      <div className="container px-4 px-lg-5 my-5">
          <div className="text-center text-primary">
              <h1 className="display-2 fw-bolder">Shop in style</h1>
              <p className="lead fw-normal text-primary-50 mb-0">With this shop hompeage template</p>
          </div>
      </div>
  </header>
  
  <section className="py-5">
      <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
              <div className="col mb-5">
                  <div className="card h-100">
                      
                      <img className="card-img-top" style={{height: "270px"}} src="https://cdn.shopify.com/s/files/1/0269/5892/1839/products/Big-Flower-Makeup-Kit-5_2048x2048.jpg?v=1669607245" alt="..." />
                     
                      <div className="card-body p-4">
                          <div className="text-center">
                             
                              <h5 className="fw-bolder">Fancy Product</h5>
                                        $40.00 - $80.00
                          </div>
                      </div>
                    
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                      </div>
                  </div>
              </div>
              <div className="col mb-5">
                  <div className="card h-100">
                      
                      <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                      
                      <img className="card-img-top" src="https://m.media-amazon.com/images/I/51bXq7c9mxL.jpg" alt="..." />
                      
                      <div className="card-body p-4">
                          <div className="text-center">
                              
                              <h5 className="fw-bolder">Special Item</h5>
                             
                              <div className="d-flex justify-content-center small text-warning mb-2">
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                              </div>
                              
                              <span className="text-muted text-decoration-line-through">$20.00</span>
                              $18.00
                          </div>
                      </div>
                      
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>handleIncrement(e)}>Add to cart</a></div>
                      </div>

                  </div>
              </div>
              <div className="col mb-5">
                  <div className="card h-100">
                      
                      <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                      
                      <img className="card-img-top"src="https://images-static.nykaa.com/media/catalog/product/7/f/7f5292cswiac00000662.jpg?tr=w-500,pr-true" alt="..." />
                    
                      <div className="card-body p-4">
                          <div className="text-center">
                             
                              <h5 className="fw-bolder">Sale Item</h5>
                              
                              <span className="text-muted text-decoration-line-through">$50.00</span>
                              $25.00
                          </div>
                      </div>
                      
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>handleIncrement(e)}>Add to cart</a></div>
                      </div>
                  </div>
              </div>
              <div className="col mb-5">
                  <div className="card h-100">
                      
                      <img className="card-img-top" src="https://down-ph.img.susercontent.com/file/9448fe1824245101d2048e665cab18ba_tn" alt="..." />
                    
                      <div className="card-body p-4">
                          <div className="text-center">
                              
                              <h5 className="fw-bolder">Popular Item</h5>
                             
                              <div className="d-flex justify-content-center small text-warning mb-2">
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                              </div>
                             
                              $40.00
                          </div>
                      </div>
                      
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>handleIncrement(e)}>Add to cart</a></div>
                      </div>
                  </div>
              </div>
              <div className="col mb-5">
                  <div className="card h-100">
                      
                      <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                      
                      <img className="card-img-top" src="https://m.media-amazon.com/images/I/61mMeXLOkAL.jpg" alt="..." />
                      
                      <div className="card-body p-4">
                          <div className="text-center">
                              
                              <h5 className="fw-bolder">Sale Item</h5>
                             
                              <span className="text-muted text-decoration-line-through">$50.00</span>
                              $25.00
                          </div>
                      </div>
                      
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>handleIncrement(e)}>Add to cart</a></div>
                      </div>
                  </div>
              </div>
              <div className="col mb-5">
                  <div className="card h-100">
                     
                      <img className="card-img-top" src="https://crownbrush.com.au/wp-content/uploads/2020/08/BMK-Web.jpg" alt="..." />
                      
                      <div className="card-body p-4">
                          <div className="text-center">
                             
                              <h5 className="fw-bolder">Fancy Product</h5>
                              
                              $120.00 - $280.00
                          </div>
                      </div>
                     
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">View options</a></div>
                      </div>
                  </div>
              </div>
              <div className="col mb-5">
                  <div className="card h-100">
                      
                      <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                     
                      <img className="card-img-top" src="https://m.media-amazon.com/images/I/71quweUioqL._SL1200_.jpg" alt="..." />
                   
                      <div className="card-body p-4">
                          <div className="text-center">
                             
                              <h5 className="fw-bolder">Special Item</h5>
                             
                              <div className="d-flex justify-content-center small text-warning mb-2">
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                              </div>
                              
                              <span className="text-muted text-decoration-line-through">$20.00</span>
                              $18.00
                          </div>
                      </div>
                    
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>handleIncrement(e)}>Add to cart</a></div>
                      </div>
                  </div>
              </div>
              <div className="col mb-5">
                  <div className="card h-100">
                     
                      <img className="card-img-top" src="https://m.media-amazon.com/images/I/61np-gBqwJL._SX679_.jpg" alt="..." />
                      
                      <div className="card-body p-4">
                          <div className="text-center">
                              
                              <h5 className="fw-bolder">Popular Item</h5>
                             
                              <div className="d-flex justify-content-center small text-warning mb-2">
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                                  <div className="bi-star-fill"></div>
                              </div>
                            
                              $40.00
                          </div>
                      </div>
                     
                      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                          <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#" onClick={(e)=>handleIncrement(e)}>Add to cart</a></div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </section>
  
  <footer className="py-5 bg-dark">
      <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Your Website 2022</p></div>
  </footer>

    </div>
  );
}

export default App;
