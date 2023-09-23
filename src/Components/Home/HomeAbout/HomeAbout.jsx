import { Link } from 'react-router-dom';
import homeAboutImage from '../../../assets/images/home-about.jpg';
const HomeAbout = () => {
    return (
        <>
            <div className="hero min-h-screen bg-orange-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    
                    <div className='text-center lg: mx-16'>
                        <h3 className="text-xl font-bold italic">a few words</h3>
                        <h1 className='text-7xl font-bold'>About Us</h1>
                        <p className="py-6">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                        <Link to="/tours"><button className="btn btn-active btn-accent w-48">View All Tours</button></Link>
                    </div>
                    <img src={homeAboutImage} className="max-w-sm rounded-lg lg:max-w-lg" />
                </div>
            </div>
        </>
    )
}

export default HomeAbout;