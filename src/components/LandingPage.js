import '../styling/LandingPage.css';
import Typed from 'typed.js';
import { useEffect } from 'react';
import { useRef } from 'react';
import Image from 'react-bootstrap/Image';
import { FaBeer } from 'react-icons/fa';
import { IoLogoLinkedin, IoLogoGithub, IoMailSharp } from "react-icons/io5";


const LandingPage = () => {

    const el = useRef(null);
    const typed = useRef(null);

    useEffect(() => {
        const options = {
            strings: [
            'am a software engineer.',
            'work on the backend.',
            'create websites.',
            'am a great fit for your company.'
          ],
          typeSpeed: 100,
          backSpeed: 100,
          loop: true
        };
        
        // elRef refers to the <span> rendered below
        typed.current = new Typed(el.current, options);
        
        return () => {
          // Make sure to destroy Typed instance during cleanup
          // to prevent memory leaks
          typed.current.destroy();
        }
      }, [])



    return (
        <div>
            <div class="iam">
                {/* <div class="helloworld">Hello world!</div><button class="button">Translate</button> */}
                <div className="type-container">
                    <h1> I <span className="typed" style={{ whiteSpace: 'pre' }} ref={el} /> </h1>
                </div>

                <div className="headshot-container">
                  <Image className="headshot" src="../images/about/headshot.jpg" />
                  {/* <a href="https://www.linkedin.com/in/tiffanylast" target="_blank"> LinkedIn </a>
                    <a href="https://github.com/tifflastimosa/Portfolio" target="_blank"> GitHub </a>
                    <a href="mailto:lastimosa.ti@northeastern.edu"> E-mail </a> */}
                </div>     

                <div className="links-container">
                    {/* <a href="https://www.linkedin.com/in/tiffanylast" target="_blank"><IoLogoLinkedin /></a>
                    <a href="https://github.com/tifflastimosa/Portfolio" target="_blank"><IoLogoGithub /></a>
                    <a href="mailto:lastimosa.ti@northeastern.edu"><IoMailSharp /></a> */}
                </div>     
                
            </div>

       
            
        </div>

        
    )

}

export default LandingPage;