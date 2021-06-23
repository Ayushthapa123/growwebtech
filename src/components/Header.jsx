import React from 'react';
import Navbar from './Navbar';
import '../css/common.css';
import '../css/header.css';



function Header() {











  return (
    <div>
     
    <header className='header'>

    <div>
            <Navbar/>
        </div>
<div className='left-header'>
<h1>We help to grow your business</h1>

<h2>Web Development Company In NEPAL</h2>

<a href='#pricing'><button>Website Pricing</button></a>
</div>

<div className='right-header'>

<div className='what-is'>
  <h3>What is Grow web technologies?</h3>
  <ul>
    <li>A complete web solution for your business.</li>
    <ul>
      <li>Web development</li>
      <li>App development</li>
      <li>Website maintainance</li>
      <li>Online business consultent</li>
      <li>Digital marketing</li>
      <li>SEO service</li>
      <li>Content writing</li>
    </ul>
  </ul>
</div>
</div>
     </header>
 

    </div>
  );
}

export default Header;
