import '../css/method.css';
import Mcard from './Mcard'

import planning from '../photos/planning.png';
import analysis from '../photos/analysis.png';
import design from '../photos/design.png';
import development from '../photos/coding.png';
import testing from '../photos/cheque.png';
import launch from '../photos/launch.png';





function Method() {




    return (

<div className='devmethod'>
<h2 className='title'>Our Development Methodology</h2>
<section className='method-container'>

    <div className='method'>
  <Mcard imgsrc={planning} methodno='1.Planning'/>
    </div>

    <div className='method'>
  <Mcard imgsrc={analysis} methodno='2.Analysis'/>
    </div>

    <div className='method'>
  <Mcard imgsrc={design} methodno='3.Design'/>
    </div>

    <div className='method'>
  <Mcard imgsrc={development} methodno='4.Development'/>
    </div>

    <div className='method'>
  <Mcard imgsrc={testing} methodno='5.Testing'/>
    </div>

    <div className='method'>
  <Mcard imgsrc={launch} methodno='6.Launch'/>
    </div>




</section>
</div>


    );
  }
  
  export default Method;