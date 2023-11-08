import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone,faLocationDot,faEnvelope } from '@fortawesome/free-solid-svg-icons';


function Contact(){
    return(
        <>
        <div className="my-5">
            <h1 className="text-center"><b>Contact Us</b></h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                  <h1><b>Feel free to write</b></h1><br></br>
                  <form>
  <div className="row">
    <div className="col-md-6 col-10 mx-auto">             
  <div className="mb-3">
    <label for="exampleInputName" className="form-label">Full Name</label>
    <input type="text" className="form-control" placeholder="enter your name" />
  </div>
  <div className="mb-3">
    <label for="exampleInputPhone" className="form-label">Phone</label>
    <input type="Phone" className="form-control" placeholder="mobile number" />
    </div>
  </div>
  
  <div className="col-md-6 col-10 mx-auto">
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" placeholder="email" />
    
  </div>
 
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control"  placeholder="password" />
  </div>
  </div>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" for="exampleCheck1">Check out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
                </div>
                <div className="col-md-6 col-10 mx-auto">
                  <h1><b>Can i help you?</b></h1><br></br>
                  <div className="text">Lorem ipsum is simply free text available dolor sit amet
                     consectetur notted adipisicing elit sed do eiusmod tempor
                     incididunt simply dolore magna.</div><br></br>
                     <ul className="list-unstyled contact-details__info">
							<li>
              <div>
								<span><FontAwesomeIcon icon={faPhone} /></span>
								</div>
								<div className="text">
									<h6>Have any question?</h6>
									<a href="tel:980089850"><span>Free</span> +91 (020)-9850</a>
								</div>
							</li><br></br>
							<li>
								<div className="icon">
									<span><FontAwesomeIcon icon={faEnvelope} /></span>
								</div>
								<div className="text">
									<h6>Write email</h6>
									<a href="mailto:needhelp@company.com">needhelp@company.com</a>
								</div>
							</li><br></br>
							<li>
								<div className="icon">
									<span><FontAwesomeIcon icon={faLocationDot} /></span >
								</div>
								<div className="text">
									<h6>Visit anytime</h6>
									<span>Bulandshahr. Uttar Pradesh</span>
								</div>
							</li>
						</ul>

                </div>
            </div>
        </div>
        {/* <div className="form1" id="fom">	 */}

  {/* <h4 style="text-align:center;
    background: #e8505b;
    border-radius: 10px;
    color: #fff; font-size: 19px;  padding: 18px;"><span style="color:#ff0202" ></span><b>Please fill in the details below</b>
	<br></br>Our experts will contact you shortly!</h4> */}
	
	
	

{/* <form action="email.php" method="post">

<div className="form2">
<div className="col-md-12">

<div className="form-group">

<input name="name" className="form-control" required="" type="text" placeholder="Your name.."/>
</div>

<div className="form-group">

<input className="form-control" name="city" required="" type="city" placeholder="City*"/>
</div>
<div className="form-group">

<input className="form-control" name="phone" required="" type="tel" pattern="[6789][0-9]{9}" placeholder="Mobile No*"/>
</div>
<div className="form-group">

<textarea className="form-control" name="message" required="" type="message" placeholder="Type Your Query*" style="height: 95px;"></textarea>
</div>

<button className="btn btn-success btn-lg pull-right" type="submit" name="send">REQUEST A QUOTE</button>
</div>
</div>

</form>  */}
{/* <!-- About Content Ends --> */}

{/* </div> */}
{/* <!-- Primary Content Ends --> */}

         

        </>
    )
}

export default Contact;