import React, { useContext } from 'react';
import './Home.css'
import { AuthContext } from '../../../Provider/AuthProvider';
import load from "../../../assets/loading.png"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import About from '../../About/About';
import Services from '../../Services/Services';
import Contact from '../../Contact/Contact';

const Home = () => {
const {loading} = useContext(AuthContext)

const [text] = useTypewriter({
  words: ['Web Developer _', 'Web Designer _', 'Typewriter _', 'Photographer _'],
  loop: 4,
  typeSpeed:120,
  deleteSpeed: 80,


})
if(loading){
    return  <img className='animate-spin h-20  mx-auto mt-40' src={load} alt="" />
}
    return (
        <div className=''>
          <div className="main_header">
      <header className="header_section">
        <div className="box">
          <div className="content">
            <img src="https://i.ibb.co/4Nd1bKr/rajulogo.png" alt="" />
            <h2>
              Raju Halder <br /> <span>Web Developer</span>
            </h2>
            <a href="">Hire me</a>
          </div>
          <div></div>
        </div>
       
      </header>
      <div className="my_details text-center text-white">
        <h2 className='text-5xl mt-4'>I'm Raju Halder</h2>
        <h4 className='text-3xl mt-5  '>
          <span>I'm </span>
            <span className='text-3xl' style={{fontWeight:'bold', color:'white'}}>
              {text}
            </span>
            <span className=''>
            <Cursor cursorColor='red' />
            </span>
          
        </h4>
        <div className="social_icon">
        
        </div>
      </div>
    </div>
          <About>
            
          </About>
          <Services>

          </Services>
          <Contact></Contact>
        </div>
    );
};

export default Home;