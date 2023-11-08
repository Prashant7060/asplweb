import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Home() {
  return (
    <div>
    <Carousel>
      <Carousel.Item>
        <img src="http://www.atmasamman.com/wp-content/uploads/2021/01/innovation-systems_800x450.jpg" 
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
        <img src="http://www.atmasamman.com/wp-content/uploads/2021/01/future_technology_prospects.png"
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
    <div>
      <h1>WELCOME TO ATMASAMMAN TECHNOLOGY</h1>
      <h3>Converting a rough idea into successful commercial business venture</h3>
       <p>AtmaSamman has expanded its offerings and capitalized on evolving management trends and technologies to benefit its clients. The company pioneered systems integration and business integration led the deployment of enterprise resource planning, customer relationship management and electronic services established as an active player in today’s global marketplace.
Continuous innovation and rapid transformation have been themes throughout AtmaSamman history. Established primarily as a technology consultant and systems integrator, AtmaSamman soon began offering a new breed of business integration solutions to clients solutions that aligned organizations technologies, processes and people with their strategies. AtmaSamman provides enterprise solutions, technology services and outsourcing services. This is a global enterprise that provides you with the industry’s most focused resources and deliver value through consistency, global relationships, higher levels of performance and innovation.</p>
    </div>
    <div className='grid1'>
      <img src="http://www.atmasamman.com/wp-content/uploads/2020/12/dataMigration-1-1-1.jpg"className='grid'/>
      <img src="http://www.atmasamman.com/wp-content/uploads/2020/12/images-2.jpg" className='grid'/>
      <img src="http://www.atmasamman.com/wp-content/uploads/2020/12/images-3.jpg" className='grid' />
    </div>
    <div>
      <img src="http://www.atmasamman.com/wp-content/uploads/2020/12/w3.png" className='grid'/>
      <img src="http://www.atmasamman.com/wp-content/uploads/2020/12/w2.png" className='grid'/>
      <img src="http://www.atmasamman.com/wp-content/uploads/2020/12/w1.png" className='grid'/>
    </div>
    <h1>COMBINING TECHNOLOGY, INTELLECT</h1>
    <h3>AND EXPERTISE ON DEMAND</h3>
    <p>AtmaSamman provides enterprise solutions, technology services and outsourcing services. This is a global enterprise that provides you with the industry’s most focused resources and deliver value through consistency, global relationships, higher levels of performance and innovation. Our teams of consultants use the most practical tools, apply innovative ideas, define a plan of action and solve business and technical issues. Our business services combined with technology expertise stimulate innovation and growth. The results delivered by AtmaSamman consultants are measurable and practical. AtmaSamman methodology includes a collaborative and responsive approach to problem-solving that inspires innovative and effective solutions. The company AtmaSamman, The growing company in Software, Services and Solutions has come a long way. Our sole motto is to offer out-of-the box software products and high end Telecom Solutions to call centres of all industry verticals.</p>
    <h1>TECHNOLOGY THAT HELP YOUR</h1>
    <h3>BUSINESS SUCCEED</h3>
    <p>AtmaSamman, as a service Organization, and client satisfaction is the basis for a successful business. We are committed to provide quality information technology services to our clients with a blend and breadth of industry experience and talent available at our offshore delivery center, AtmaSamman has been consistently designing, developing, testing, implementing and supporting prestigious software client assignments for international and domestic markets. We offer industry-specific solutions and integration services through a unique onsite, offsite, offshore delivery model that helps our clients achieve reduced “time to market” their products and world-class quality on-time in budget. AtmaSamman has gained its reputation by delivering quality services through delivering time critical solutions and continuously evolving through innovative delivery methods..</p>
    <h1>ATMASAMMAN ADVISORY SERVICES</h1>
    <h3>HIGH-VALUE ENTERPRISE IT STRATEGY CONSULTINGTO HELP BUSINESS</h3>
    <p>The companies with the aim of are a large amount unbeaten on applying knowledge next unlocking the price of in sequence toward innovate their big business models, food after that air force force dominate their hard work in the sphere of the future. The transfer into issue escalation strategies in relation to innovation-based development compels companies near alter possessions near higher-value activities. however particular inadequate intensification within budgets in addition to greater than ever demands, this be capable of lone come to pass achieved before civilizing efficiency. The twin goals of intricacy discount as a consequence talent realignment initiative reallocation of some degree of IT assets just before high-value tricks as a consequence canister alleviate boost IT gift near the organization’s strategic multinational agenda.</p>
      
    </div>
  );
}
export default Home;