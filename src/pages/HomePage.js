import React from "react";
import { MDBEdgeHeader, MDBFreeBird, MDBCol, MDBRow, MDBIcon, MDBJumbotron, MDBBtn, MDBContainer, MDBCardTitle, MDBNavLink, MDBNav, MDBCardImage, MDBCardBody, MDBCardText, MDBCard, MDBCardGroup, MDBCollapse, MDBMask } from "mdbreact";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <div>
      <MDBJumbotron fluid style={{ backgroundImage: `url(https://carolinecalder.com/img/main-img-re2.jpg)` }}>
        <MDBContainer>
          <h2 className="text-white display-4">Web Development | Digital Marketing </h2>
          <p className="lead text-white col-lg-8 col-sm-12">Welcome to Digital Marketing. If you are looking for a starting point to your online business needs I can help. I can give you a basic solution to start growth, or I can grow your already existing online presence. </p>
          <MDBBtn outline color="white" className="mb-5" href="/contact"><MDBIcon icon="clone" className="mr-2"></MDBIcon> Contact Me</MDBBtn>
        </MDBContainer>
      </MDBJumbotron>
      <MDBFreeBird>
        <MDBContainer>
        <MDBRow>
          <MDBCol>
            <MDBJumbotron>
              <MDBCardBody>
                <MDBCardTitle className="h2">
                Websites done different
              </MDBCardTitle>
                
                <MDBCardText>
                <p>Start your online journey today. I build websites that perform. I partner with companies and individuals interested in building an online presence to continue healthy business growth. Customized plans are available for your evolving business needs.</p>
                <p>I am an experienced professional and freelance web developer. I currently reside in Calgary, Alberta, but also have remote clients. I am always looking for opportunities to take on more clients big or small. Please have a look at my <a href="https://www.carolinecalder.com/resume" target="_blank">resume</a> for experience, and feel free to reach out for examples.</p>
              </MDBCardText>
                <hr className="my-4" />
                <div className="pt-2">
                  
                </div>
                
              </MDBCardBody>
              <MDBCardGroup deck className="mt-3">
          <MDBCard>
            <MDBCardImage
              src="https://carolinecalder.com/img/card-web.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Web Development</MDBCardTitle>
              <MDBCardText>
              </MDBCardText>
              <MDBBtn color="primary" size="md" href="/services/web">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardImage
              src="https://carolinecalder.com/img/card-design.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Responsive Design</MDBCardTitle>
              <MDBCardText>
              </MDBCardText>
              <MDBBtn color="primary" size="md" href="/services/Design">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>

          <MDBCard>
            <MDBCardImage
              src="https://carolinecalder.com/img/card-marketing.jpg"
              alt="MDBCard image cap"
              top
              hover
              overlay="white-slight"
            />
            <MDBCardBody>
              <MDBCardTitle tag="h5">Digital Marketing</MDBCardTitle>
              <MDBCardText>
              </MDBCardText>
              <MDBBtn color="primary" size="md" href="/services/marketing">
                read more
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
            </MDBJumbotron>
          </MDBCol>
        </MDBRow>
        </MDBContainer>
        </MDBFreeBird>
        
        
      </div>
    );
  }
}

export default HomePage;
