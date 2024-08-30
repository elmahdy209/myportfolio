import Lottie from 'lottie-react';
import './Hero.css'
import devAnim from '../../animation/person-developer.json';
const Hero = () => {
    return (

    <section className='hero  flex '>
        <div className='left-section '>
            <div className='image'>
                <img src="./me.png" alt="me.png" />
                <span className='icon-verified'></span>
            </div>
            <h1>Innovative Front-End Developer | Crafting Exceptional Web Experiences</h1>
            <p>I am a professional Front-End Developer with a passion for creating visually stunning, user-friendly web applications. With extensive experience in HTML, CSS, JavaScript, and modern frameworks like React and Angular</p>
            <div className='icons flex'>
                <a className='icon-x' href=""></a>
                <a className='icon-instagram' href=""></a>
                <a className='icon-github' href=""></a>
                <a className='icon-linkedin' href=""></a>
            </div>
        </div>
        <div className='right-section animation'><Lottie style={{height:"20rem"}} animationData={devAnim}></Lottie></div>

    </section>
    );
};

export default Hero;