import { useNavigate } from "react-router-dom";

export default function Service(){
    const navigate = useNavigate(); 
     return(
        <>
    
  <header>
    <div className="header-area ">
      <div className="header-top_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-8">
              <div className="short_contact_list">
                <ul>
                  <li>
                    <a href="#">+880 4664 216</a>
                  </li>
                  <li>
                    <a href="#">Mon - Sat 10:00 - 7:00</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-4 ">
              <div className="social_media_links">
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
                <a href="#">
                  <i className="fa fa-pinterest-p" />
                </a>
                <a href="#">
                  <i className="fa fa-google-plus" />
                </a>
                <a href="#">
                  <i className="fa fa-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sticky-header" className="main-header-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-3 col-lg-3">
              <div className="logo">
                <a href="index.html">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9">
              <div className="main-menu  d-none d-lg-block">
                <nav>
                  <ul id="navigation">
                    <li>
                      <a href="index.html">home</a>
                    </li>
                    <li>
                      <a href="about.html">about</a>
                    </li>
                    <li>
                      <a href="#">
                        blog <i className="ti-angle-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="blog.html">blog</a>
                        </li>
                        <li>
                          <a href="single-blog.html">single-blog</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">
                        pages <i className="ti-angle-down" />
                      </a>
                      <ul className="submenu">
                        <li>
                          <a href="elements.html">elements</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="service.html">services</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                       <button
                  className="boxed-btn4 mt-3"
                  onClick={() => navigate("/login")}
                >
               Login
                </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="col-12">
              <div className="mobile_menu d-block d-lg-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  {/* header_start  */}
  {/* bradcam_area_start */}
  <div className="bradcam_area breadcam_bg">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="bradcam_text text-center">
            <h3>Services</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* bradcam_area_end */}
  {/* service_area_start  */}
  <div className="service_area"> 
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-lg-7 col-md-10">
          <div className="section_title text-center mb-95">
            <h3>Services for every dog</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
            </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="single_service">
            <div className="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
              <div className="service_icon">
                <img src="img/service/service_icon_1.png" alt="" />
              </div>
            </div>
            <div className="service_content text-center">
              <h3>Pet Boarding</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single_service active">
            <div className="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
              <div className="service_icon">
                <img src="img/service/service_icon_2.png" alt="" />
              </div>
            </div>
            <div className="service_content text-center">
              <h3>Healthy Meals</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single_service">
            <div className="service_thumb service_icon_bg_1 d-flex align-items-center justify-content-center">
              <div className="service_icon">
                <img src="/assets/img/service/service_icon_3.png" alt="" />
              </div>
            </div>
            <div className="service_content text-center">
              <h3>Pet Spa</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* service_area_end */}
  {/* testmonial_area_start  */}
  <div className="testmonial_area">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="textmonial_active owl-carousel">
            <div className="testmonial_wrap">
              <div className="single_testmonial d-flex align-items-center">
                <div className="test_thumb">
                  <img src="img/testmonial/1.png" alt="" />
                </div>
                <div className="test_content">
                  <h4>Jhon Walker</h4>
                  <span>Head of web design</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exerci.
                  </p>
                </div>
              </div>
            </div>
            <div className="testmonial_wrap">
              <div className="single_testmonial d-flex align-items-center">
                <div className="test_thumb">
                  <img src="img/testmonial/1.png" alt="" />
                </div>
                <div className="test_content">
                  <h4>Jhon Walker</h4>
                  <span>Head of web design</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exerci.
                  </p>
                </div>
              </div>
            </div>
            <div className="testmonial_wrap">
              <div className="single_testmonial d-flex align-items-center">
                <div className="test_thumb">
                  <img src="img/testmonial/1.png" alt="" />
                </div>
                <div className="test_content">
                  <h4>Jhon Walker</h4>
                  <span>Head of web design</span>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exerci.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* testmonial_area_end  */}
  {/* team_area_start  */}
  <div className="team_area">
    <div className="container">
      <div className="row justify-content-center ">
        <div className="col-lg-6 col-md-10">
          <div className="section_title text-center mb-95">
            <h3>Our Team</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna.
            </p>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6">
          <div className="single_team">
            <div className="thumb">
              <img src="img/team/1.png" alt="" />
            </div>
            <div className="member_name text-center">
              <div className="mamber_inner">
                <h4>Rala Emaia</h4>
                <p>Senior Director</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single_team">
            <div className="thumb">
              <img src="img/team/2.png" alt="" />
            </div>
            <div className="member_name text-center">
              <div className="mamber_inner">
                <h4>jhon Smith</h4>
                <p>Senior Director</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="single_team">
            <div className="thumb">
              <img src="img/team/3.png" alt="" />
            </div>
            <div className="member_name text-center">
              <div className="mamber_inner">
                <h4>Rala Emaia</h4>
                <p>Senior Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* team_area_start  */}
  {/* contact_anipat_start  */}
  <div className="contact_anipat anipat_bg_1">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="contact_text text-center">
            <div className="section_title text-center">
              <h3>Why go with Anipat?</h3>
              <p>
                Because we know that even the best technology is only as good as
                the people behind it. 24/7 tech support.
              </p>
            </div>
            <div className="contact_btn d-flex align-items-center justify-content-center">
              <a href="contact.html" className="boxed-btn4">
                Contact Us
              </a>
              <p>
                Or <a href="#"> +880 4664 216</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* contact_anipat_end  */}
  {/* footer_start  */}
  <footer className="footer">
    <div className="footer_top">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-md-6 col-lg-3">
            <div className="footer_widget">
              <h3 className="footer_title">Contact Us</h3>
              <ul className="address_line">
                <li>+555 0000 565</li>
                <li>
                  <a href="#">Demomail@gmail.Com</a>
                </li>
                <li>700, Green Lane, New York, USA</li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3  col-md-6 col-lg-3">
            <div className="footer_widget">
              <h3 className="footer_title">Our Servces</h3>
              <ul className="links">
                <li>
                  <a href="#">Pet Insurance</a>
                </li>
                <li>
                  <a href="#">Pet surgeries </a>
                </li>
                <li>
                  <a href="#">Pet Adoption</a>
                </li>
                <li>
                  <a href="#">Dog Insurance</a>
                </li>
                <li>
                  <a href="#">Dog Insurance</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3  col-md-6 col-lg-3">
            <div className="footer_widget">
              <h3 className="footer_title">Quick Link</h3>
              <ul className="links">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Login info</a>
                </li>
                <li>
                  <a href="#">Knowledge Base</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-lg-3 ">
            <div className="footer_widget">
              <div className="footer_logo">
                <a href="#">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
              <p className="address_text">
                239 E 5th St, New York NY 10003, USA
              </p>
              <div className="socail_links">
                <ul>
                  <li>
                    <a href="#">
                      <i className="ti-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="ti-pinterest" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="copy-right_text">
      <div className="container">
        <div className="bordered_1px" />
        <div className="row">
          <div className="col-xl-12">
            <p className="copy_right text-center"></p>
            <p>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
              Copyright © All rights reserved | This template is made with{" "}
              <i className="ti-heart" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
              {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            </p>
            <p />
          </div>
        </div>
      </div>
    </div>
  </footer>
  {/* footer_end  */}
  
</>
    )
}
