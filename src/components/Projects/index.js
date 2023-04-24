import './index.scss';
import tdl from '../../assets/images/tdl.png';
import grvy from '../../assets/images/grvy.png';
import Crypt from '../../assets/images/Crypt.png';

const Projects = () =>{

    return( 
      
       <div className="work">
          <h2 className="project-heading"> My Projects</h2>
          <div className="project-container">
            <div className="project-card">
              <img src={Crypt} alt="To-Dos-List"></img>
               <h3 className="project-title">Crypto Tracer</h3>
               <div className="project-desc">
                <p>Built a website for tracking the Real Time Price & Total Volume of different Cryptocurrencies. Used CoinGecko API for fetching the Cryptocurrency Data
.<br/> <br/>Technologies Used: HTML, CSS, Javascript, ReactJS.
</p>
                <div className="project-buttons">
                <a className='btn' href="https://github.com/NishantR19">View</a>
                    <div className="project-buttons">
                    <a className='btn' href="https://github.com/NishantR19">Source</a>
                </div>
                </div>
               </div>
            </div>

            <div className="project-card">
              <img src={grvy} alt="To-Dos-List"></img>
               <h3 className="project-title">Groovy - A Music Player</h3>
               <div className="project-desc">
                <p>Built a music player with an Interactive UI for the easy access for user to quickly browse and play music from the
music library.
.<br/><br/> Technologies Used: HTML, CSS, Javascript</p>
                <div className="project-buttons">
                    
                    <a className='btn' href="https://github.com/NishantR19">View</a>
                    
                    <div className="project-buttons">
                    
                    <a className='btn' href="https://github.com/NishantR19">Source</a>
                </div>
                </div>
               </div>
            </div>


            <div className="project-card">
              <img src={tdl} alt="tdl"></img>
               <h3 className="project-title">To Dos List</h3>
               <div className="project-desc">
                <p>A simple To-do list application built using Html, CSS & Javascript.
                  <br/> <br/><br/>Technologies Used: HTML, CSS, Javascript.
                </p>
                <div className="project-buttons">
                <a className='btn' href="https://github.com/NishantR19">View</a>
                    <div className="project-buttons">
                    <a className='btn' href="https://github.com/NishantR19">Source</a>
                </div>
                </div>
               </div>
            </div>

          </div>


       </div>
 
    )
}

export default Projects
