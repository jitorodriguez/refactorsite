import classes from "./Navbar.module.css";

import gitImage from "../assets/img/logo_github.png";
import pdfImage from "../assets/img/pdf-icon.png";
import linkedinImage from "../assets/img/logo_linkedin.png";

import Link from "./Link";

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.leftBar}>
        <span>Jorge Rodriguez</span>
        <em> | Full Stack Software Engineer</em>
      </div>
      <div className={classes.rightBar}>
        <Link
          link="https://www.linkedin.com/in/jorge-rodriguez-605b63195/"
          linkText="LinkedIn"
          img={linkedinImage}
        ></Link>
        <Link
          link="https://github.com/jitorodriguez"
          linkText="Github"
          img={gitImage}
        ></Link>
        <Link
          link="http://jitorodriguez.com/files/RodriguezResumeSite.pdf"
          linkText="Download Resume"
          img={pdfImage}
        ></Link>
      </div>
    </nav>
  );
};

export default Navbar;
