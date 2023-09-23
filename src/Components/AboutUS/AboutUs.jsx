import aboutImage from "../../assets/images/about-us.jpg"
import cat from '../../assets/images/cat.jpg';
import aboutMission from '../../assets/images/home-review.jpg'

const AboutUs = () => {

    return (
        <>
            <div>
                <div>
                    <img src={aboutImage} alt="" />
                </div>
                <div className="mx-6 my-12">
                    <p className="text-xl font-bold italic font-serif">a few words about</p>
                    <h1 className="text-5xl font-bold py-3 font-mono">Who We Are</h1>
                    <p className="text-lg font-medium">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                </div>
                <div>
                    <div className="hero lg:py-24 ">
                        <div className="hero-content flex-col lg:flex-row">
                        <img src={cat} className="max-w-sm rounded-lg shadow-2xl" />
                            <div className="mx-6">
                                <p className="py-3 text-lg">Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
                                <p className="text-lg">Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc mauris morbi accumsan ipsum velit. Nam nec tellus.</p>
                            </div>  
                        </div>
                    </div>
                </div>
                <div className="min-h-[700px] text-white mt-28 p-12" style={{backgroundImage: `url(${aboutMission})`}}>
                    
                        <p className="text-2xl font-bold italic font-serif">we hope you share our</p>
                        <h1 className="text-4xl font-bold font-mono py-4">Mission & Vision</h1>
                        <p className="py-2">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <p className="py-2">Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit. Sed ut imperdiet nisi. Proin condimentum fermentum nunc.</p>
                        <p>Proin avida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.</p>
                    
                </div>
            </div>
        </>
    )
}

export default AboutUs;
