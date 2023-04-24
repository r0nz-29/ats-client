
import LogoT from '../../assets/images/logo-s.png';
import './index.scss';
import htmlc from '../../assets/images/htmlc.png';
import jscc2 from '../../assets/images/jscc2.png';
import cppc from '../../assets/images/cppc.png';
import githc from '../../assets/images/githc.png';
import reactc from '../../assets/images/reactc.png';
import sass from '../../assets/images/sass.png';

const Home = () => {

return(
    <div className="container home-page">
<div className="text-zone">
    <h1>Hi, <br/> I'm 
    <img src={LogoT} alt="developer" />
    ishant
    <br/>
    A Front-End Developer
    </h1>
    <h2>React / C++ </h2>
   
    <a className='flat-button' href="https://www.linkedin.com/in/nishant-singh-rai/">CONTACT ME</a>
</div>
<div className='cube-cont'>
  <div className='spin'>
  <div className='face1'>
  <img src={htmlc}  alt="developer" />
   
  </div>
  <div className='face2'>
  <img src={reactc} color="#F06529" alt="developer" />
   
  </div>
  <div className='face3'>
  <img src={cppc} color="#F06529" alt="developer" />

  </div>
  <div className='face4'>
  <img src={jscc2} color="#F06529" alt="developer" />
    
  </div>
  <div className='face5'>
  <img src={githc} color="#F06529" alt="developer" />
    
  </div>
  <div className='face6'>
  <img src={sass} color="#F06529" alt="developer" />
  
  </div>
 
  </div>
    
</div>
    </div>
)


}
export default Home
 