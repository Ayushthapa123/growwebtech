import React from 'react';
import Footer from'./Footer';
import Header from './Header';
import Services from './Service';
import Contact from './Contact';
import About from './About';
import Offer from './Offer';
import Chat from './Chat';
import Method from './Method';
import Pricing from './Pricing'




function Home() {


  function debounce(func, wait=15,immediate=true) {


    var timeout;
    return function() {
        var context=this, args=arguments;
        var later=function() {
            timeout=null;
            if(!immediate) func.apply(context, args);
        };
        var callNow=immediate && !timeout;
        clearTimeout(timeout);
        timeout=setTimeout(later,wait);
        if(callNow) func.apply(context, args);
    };
};




function checkSlide(e) {

  const sliderImage=document.querySelectorAll(".slide-in");
  const navbar=document.querySelector(".navbar");



  if(window.scrollY>400) {
    navbar.classList.add('position-fixed');
  }else {
    navbar.classList.remove('position-fixed');
  }
  
sliderImage.forEach(sliderImage=> {
  const slideInAt=(window.scrollY+ window.innerHeight) - sliderImage.height/2;

const imageBottom=sliderImage.offsetTop + sliderImage.height;
const isHalfShown=slideInAt > sliderImage.offsetTop;
const isNotScrolledPast= window.scrollY<imageBottom;

if(isHalfShown && isNotScrolledPast) {
  sliderImage.classList.add('view-active')
}else {
  sliderImage.classList.remove('view-active');
}




})



}


window.addEventListener('scroll', debounce(checkSlide));












  return (
    <div>
<Header/>

<About/>
<Services/>
<Method/>
<Pricing/>
<Contact/>
<Footer/>
<Chat/>
    </div>
  );
}

export default Home;
