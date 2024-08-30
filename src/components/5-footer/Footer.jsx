import './Footer.css'
const Footer = () => {
    return (
        <div className='footer  flex'>
           <section className='footer-links'>
            <ul className='flex'>
                <li><a href="/">Home</a></li>
                <li><a href="">Projects</a></li>
                <li><a href="/skills">Skills</a></li>
                <li><a href="">Uses</a></li>
            </ul>
           </section>
           <section className='footer-cr'>
            <p>&copy; 2024 Elmahdy Abdallah. All rights reserved.</p>
           </section>
        </div>
    );
};

export default Footer;