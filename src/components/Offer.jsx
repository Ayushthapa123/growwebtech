import React from 'react';
import '../css/offer.css';





function Offer() {
  return (
    <section className='offer-box' id='offer'>
    <div className='comp-offer'>
<p className='title'>BEST OFFER NOW</p>
<p className='price blink'><span>Get your complete static website in just Rs.7,000</span> </p>

<div className='contents'> 
<p>All you need to provide is <span>fresh email account</span> with your control and your <span> business details, </span>
your website will be live on internet within 5 days.
</p>
<p className='youget'>
    What You Will Get!
</p>
<ul>
    <li id='awesome-web'>An Awesome website with:</li>
    <ul>
    <li>
Free .com.np domain (lifetime) or (.com) domain for one year.
    </li>
    <li>Free Hosting (lifetime) </li>
    <li>Free Logo, Favicon</li>
    <li>Up to 5 pages (Home,Contact,Services...)</li>
    <li>Up to 10 topics (Map,Contact form, Services etc. ) </li>
    <li>Responsive design</li>
    <li>User-friendly and attractive layout</li>
    <li>Free onpage SEO for 2 keywords.</li>
    <li>Content Upload</li>
    <li>Contact page linked with your email</li>
    <li>Technologies Used(HTML,CSS,Javascript, React) </li>
</ul>

</ul>
{/* <p>Reference website: <a href='https://tender-galileo-080a2a.netlify.app/' target="_blank" >Unity homes</a></p> */}
</div>


    </div>

    </section>
  );
}

export default Offer;
