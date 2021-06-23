import React from 'react';
import '../css/service.css';
import Card from './Card';

import app from '../photos/app.jpg';
import webd from '../photos/webdevelop.png';
import marketing from '../photos/marketing.png';
import seo from '../photos/seo.png';




function Service() {
  return (
    <div className='component' id='service'>


       <h3 className='title'>OUR BEST <span className='title'>SERVICES</span></h3>
<div className='services'>

 <div className='sleft' >

 <Card  src={webd} title='Web Development'  description=' Websites are 24/7 working agents for your business, Which help to bring 
 customers from internet to your shop without any salary or comission. Then why not to make a awesome website with us?  
Now days peoples will not belive in your business properely if they do not find your business in internet search. Also, 
peoples judge your business on the basic of how good your website looks like. So, if you want to grap peoples attension our 
best designers and web developers can definitely help you.
  '/>
<Card  src={app} title='Apps Development'  description='App Development refers to the creation of computer applications for 
use on mobile devices such as tablets, smartphones and smart watches. Mobile device features such as cameras, motion and location 
awareness can be used to create unique and inventive mobile-only applications for things such as taxi and bike sharing.'/>




 </div>

<div className='sright'>

<Card  src={marketing} title='Digital marketing'  description='Digital marketing, online marketing, internet advertising…whatever you call it,
 marketing your company online is a big deal these days. After all, internet usage has more than doubled over the past decade and this shift has 
 massively affected how people purchase products and interact with businesses. Digital marketing is like any other type of marketing—it’s a way to
  connect with and influence your potential customers.'/>

<Card  src={seo} title='SEO' description='In simple terms, it means the process of improving your site to increase its visibility for relevant searches.
 The better visibility your pages have in search results, the more likely you are to garner attention and attract prospective and existing customers to your business.' />


</div>

</div>


</div>

  );
}

export default Service;