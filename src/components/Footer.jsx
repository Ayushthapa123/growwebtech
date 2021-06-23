import React from 'react';
import { FaFacebookSquare,FaInstagramSquare,FaTwitterSquare,FaPhoneSquareAlt,FaEnvelope} from "react-icons/fa";
import '../css/footer.css';


function Footer() {
  return (
    <div className='footer'>
<div className='footer-container'>

  <footer>
<div className='left-footer'>

<h3 className='foot-title'>contact info</h3>
<p className='foot-p'>Address</p>
<p>Lalitpur, Kupondole, 4400</p>

<hr/>
<p className='foot-p'>Phone Number</p>
<p>9846793894,9805143993</p>
<hr/>


<p className='foot-p'>Email:</p>
<p>growwebtechnology@gmail.com</p>


  </div>    


<div className='right-footer'>

<h3 className='foot-title'>Pages</h3>

<li><a href='/contact'>Contact</a></li>
<li><a href='#'>Blogs</a></li>
<li><a href='#'>Signup</a></li>
<li><a href='#'>Login</a></li>

</div>

<div className='social-icons'>

<h3 className='foot-title'>We are social</h3>
<a href='https://www.facebook.com/growwebtech/'><FaFacebookSquare/></a>
<a href='#'><FaInstagramSquare/></a>
<a href='#'><FaTwitterSquare/></a>


<hr/>

<h3 className='foot-title'>Our Community</h3>

<li><a href='/tearms-and-conditions'>Tearm and Condition</a></li>
<li><a href='/privacy-policy'>Privacy Policy</a></li>
<li><a href='#'>Blogs</a></li>

</div>



</footer>

</div>
<div className='super-footer'>
  <h2>Grow Web Technology</h2>
<p><a href='#'>@Grow web technologies </a></p>
</div>
    </div>
  );
}

export default Footer;