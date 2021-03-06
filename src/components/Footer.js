import styled from "styled-components";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitter,
  FaInstagramSquare,
  FaGithub,
} from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="cointainer">
          <div className="row">
            {/* Column-1 */}
            <div className="col-md-3 col-sm-6">
              <h4></h4>
              <ul className="list-unstyled">
                <li>283 Mphike st</li>
                <li>Hlongwane Section </li>
                <li>Katlehong </li>
                <li>1431</li>
                <li>Johannesburg</li>
                
              </ul>
            </div>
            {/* Column-2 */}
            <div className="col-md-3 col-sm-6">
              <h4></h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/https://github.com/FidelDhlamini/portfolio-project">
                    <FaGithub className="footer-icons"></FaGithub></a>
                </li>
                <li>
                  <a href="/"></a>
                </li>
                <li>
                  <a href="/"></a>
                </li>
                <li>
                  <a href="/"></a>
                </li>
              </ul>
            </div>
            
            {/* Column-3*/}
            <div className="col-md-3 col-sm-6">
              <h4>Jump to page</h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/contactme">Contact Me</a>
                </li>
                <li>
                  <a href="/aboutme">About Me</a>
                </li>
                <li>
                  <a href="/"></a>
                </li>
                <li>
                  <a href="/projects">Projects</a>
                </li>
              </ul>
            </div>
            {/* Column-4 */}
            <div className="col-md-3 col-sm-6">
              <h4>social</h4>
              <ul className="list-unstyled">
                {/* <li>
                  <a href="/">
                    <FaFacebookSquare className="footer-icons"></FaFacebookSquare>{" "}
                  </a>
                </li> */}
                <li>
                  <a href="/">
                    <FaLinkedin className="footer-icons"></FaLinkedin>
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FaTwitter className="footer-icons"></FaTwitter>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/formic_iconic_/">
                    <FaInstagramSquare className="footer-icons"></FaInstagramSquare>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer-Bottom */}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} - Formic Iconic App - All Rights Reserved
             
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}
export default Footer;

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 1rem;
    // padding-bottom: 1rem;
    padding-left: 5rem;
    color: var(--primary-white);
    letter-spacing: 0.0375rem;
    font-size: 0.9rem;
    font-family: "Roboto Condensed", sans-serif;
    // text-transform: uppercase;
    text-decoration: none;
  }
  .footer-bottom {
    padding-top: 1rem;
    padding-bottom: 1rem;
    
  }
  ul li a {
    color: var(--mainGrey);
  }
  ul li a:hover {
    color: var(--primary-hover-red);
  }
 
`;
