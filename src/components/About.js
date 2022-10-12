import Image from 'react-bootstrap/Image';
import '../styling/About.css';


const About = () => {

    return (
        <div>
            
            <div class="text">
                <h1>About Me</h1>
                <Image className="gizmo" src="../images/about/meandgizmo.jpeg" />
                <div class="paragraph" id="fade"> 
                <p>My name is Tiffany. I am a woman in her 30s making a career change after realizing the legal field was not for me.
                    
                    I have a corgi named Gizmo. 
                    He is named after the cute gremlin, Gizmo, from the movie 
                    Gremlins because of his big ears, but he can sometimes 
                    be a little gremlin with his fiesty attitude and hunger for snacks after midnight.</p>
                 <p>On the weekends, I love to play tennis. I'm a
                     little rusty, but slowly increasing my USTA ranking. My goal is start competing in the USTA league. In addition
                     to tennis, I love to play the ukulele and cook. I make a delicious
                     pork adobo and garlic friend rice. I am also a Disney and Star Wars nerd. A goal of mine is to visit
                     all the Disneylands so I can ride all the rides and eat all the themed food. 
                 </p>
                 <p>You can always find me helping other programmers develop their own projects, doing my own projects or coming up with a plan for my next trip to
                     Disneyland.
                 </p></div>
                 </div>
        </div>
    )

}

export default About;