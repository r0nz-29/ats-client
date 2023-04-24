import './index.scss'
import work from '../../assets/images/work.png';
import Gradc from '../../assets/images/Gradc.png';
import schc from '../../assets/images/schc.png';

const About = () =>{

    return( 
   <div className='container'> 
 <div className='maint'>
      <h2>About <span>Me</span></h2>
 </div>
 <div className='About-cont'>
 <div className='aboutl'>
    <h4>Information</h4>
    <p> I am a Pre-Final year student at Shri G S Institute of Technology & Science pursuing B. Tech in Information Technology in the class of 2024. I have excellent Problem Solving skills and ability to perform well in a team.  
    Moreover, I also completed 3 successful individual projects on the MERN Stack.I have also Completed an Internship at Newton School ( Incanus Technologies Private Limited ) as well in this particular domain where along with core technical things I also learned organizational ethics and discipline.  <br/><br/>I also have a deep understanding of Data structure & Algorithm and have practiced 200+ Problems on GFG & Leetcode.
      I am an AMCAT Certified Software Development Trainee.My most extensive interests include programming, reading, and playing football.
       <br/><br/>Currently I am seeking an opportunity as Software Development intern to enhance my skillset and gain experience in the area of Software Development.
</p>
    </div>


    <div className='timeline'>
    <h4 className='timeline-title'>My Timeline</h4>
    <div className='timeline-item'>
        <div className='tl-con'>
        <img className='Wk' src={work}  alt="developer" />
        </div>
        <p className='tl-duration'> Intern - Newton School.<br/> <span>Aug 2022 - Sept 2022</span> </p>

    </div>

    <div className='timeline-item'>
        <div className='tl-con'>
        <img src={Gradc}  alt="developer" />
        </div>
        <p className='tl-duration'>B. Tech - Shri G S Institute of Technology & Science.<br/> <span>CGPA : 8.19</span></p>
    </div>

    <div className='timeline-item'>
        <div className='tl-con'>
        <img src={schc}  alt="developer" />
        </div>
        <p className='tl-duration'> Class XII - Kamla Nehru Hr. Sec. School. <br/> <span>Percentage: 88.60%</span> </p>

    </div>
    </div>
 </div>
 </div>  
    )
}

export default About
