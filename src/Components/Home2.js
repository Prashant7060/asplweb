import React from "react";
import Carousel from 'react-bootstrap/Carousel';
// import web from "./images/img1.jpg";
// import Card from "./Card";

function Home2(){
    return(
        <>
        <Carousel>
      <Carousel.Item>
        <img src="images\service-3.jpg" 
        className="img"/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Second slide" /> */}
        <img src="http://www.atmasamman.com/wp-content/uploads/2021/01/wp1997625-scaled.jpg"
        className="img"/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src="https://th.bing.com/th/id/OIP.LLzhOqi1UW6-sVaznhiIBgHaEi?w=291&h=180&c=7&r=0&o=5&pid=1.7"
        className="img" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        {/* <ExampleCarouselImage text="Third slide" /> */}
        <img src="http://www.atmasamman.com/wp-content/uploads/2020/12/cooley-consulting-professional-services-scaled.jpg" className="img"/>
        <Carousel.Caption>
          <h3>fourth slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
        <section id="header" className="d-flex align-item-center">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                         <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>
                                Welcome To Atmasamman Technology
                            </h1>
                            <h3 className="my-3">
                            Converting a rough idea into successful commercial business venture
                            </h3>
                            <ul>
                                <li>Reading, re-sharing, and posting testimonials</li>
                                <li>Conducting interviews</li>
                                <li>Listening to videos</li>
                                <li>Looking on social media for comments and reviews</li>
                                
                              </ul>
                         </div>
                         <div className="col-lg-6 order-1 order-lg-2 header-img pt-5">
                            <img src="images\img3.jpg"
                            className="img-fluid animated img1" alt="home img"
                            />
                            <img src="images\img1.jpg" className="img2" alt="home img"/>
                         </div>

                         </div>
                    </div>
                </div>
            </div>  
            
        </section>
        <div className="container-fluid content-1" >
            <div className="row">
                <h1 className="pt-10">COMBINING TECHNOLOGY, INTELLECT</h1>
                <h2>AND EXPERTISE ON DEMAND</h2>
                <p>AtmaSamman provides enterprise solutions, technology services and outsourcing services. This is a global enterprise that provides you with the industry’s most focused resources and deliver value through consistency, global relationships, higher levels of performance and innovation. Our teams of consultants use the most practical tools, apply innovative ideas, define a plan of action and solve business and technical issues. Our business services combined with technology expertise stimulate innovation and growth. The results delivered by AtmaSamman consultants are measurable and practical. AtmaSamman methodology includes a collaborative and responsive approach to problem-solving that inspires innovative and effective solutions. The company AtmaSamman, The growing company in Software, Services and Solutions has come a long way. Our sole motto is to offer out-of-the box software products and high end Telecom Solutions to call centres of all industry verticals.
</p>
            </div>
            </div>
            {/* <service section> */}
        <div className="my-2">
            <h1 className="tab-center">High quality products and services<br></br>
that we stand behind</h1>
        </div>
        <div className="Container-fluid mb-5">
            <div className="row">
                <div className="col-10 mx-auto">
                    <div className="row gy-4">
                         <div className="col-md-4 col-10 mx-auto card-1">
                         <div class="card">
  <img src="images\img3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Web Development</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                        </div>

                         </div>
                         <div className="col-md-4 col-10 mx-auto card-1">
                         <div class="card">
  <img src="images\2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">App Development</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

                         </div>
                         <div className="col-md-4 col-10 mx-auto card-1">
                         <div className="card">
  <img src="images\img1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Software Development </h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

                         </div>
                         <div className="col-md-4 col-10 mx-auto card-1">
                         <div class="card">
  <img src="images\2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Digital Marketing</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

                         </div>
                         <div className="col-md-4 col-10 mx-auto card-1">
                         <div class="card">
  <img src="images\product_development.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Amazon Web Services</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

                         </div>
                         <div className="col-md-4 col-10 mx-auto card-1">
                         <div class="card">
  <img src="images\img3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Database Management</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

                         </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <Card/> */}

     </>
    )
}

export default Home2;