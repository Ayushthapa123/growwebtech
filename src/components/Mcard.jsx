import '../css/mcard.css';


function Mcard(props) {




    return (

<div className='mcard'>

<div className='method-img'>
<img src={props.imgsrc} alt='first' />
</div>
<div className='method-no'>
<h3>{props.methodno}</h3>
</div>

</div>


    );
  }
  
  export default Mcard;