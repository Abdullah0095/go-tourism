import React from 'react';
import background from "../../../assets/images/home-bg.jpg";
import fakeData from '../../FakeData/FakeData';



const HomeBanner = () => {

    return (
        <div className='h-max' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'none' }}>
            <div className='py-24'>
                <h1 className='font-serif text-8xl font-bold mt-24 lg:ml-48'>Travel & Explore <br /> the World</h1>
                <p className='text-gray text-xl py-3 lg:ml-48'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Delectus dolores vero optio eaque hic laborum, <br /> totam numquam magni? Laborum, reiciendis.</p>
                <button className="btn btn-accent my-4 w-48 text-white lg:ml-48">BOOK MY TOUR</button>
            </div>
            
            <div className='flex justify-end'>
                {
                    fakeData.map(info => <HomeTourInfo info={info} key={info.title}></HomeTourInfo>)
                }
            </div>
            <div className="hidden lg:block ml-[300px] ">
                <h3 className='font-serif text-2xl font-bold italic'>our most</h3>
                <h1 className='text-4xl font-semibold  py-3 font-mono'>Popular tours</h1>
                <button className="btn btn-outline btn-secondary px-9 font-bold">View All Tours</button>
            </div>
        </div>
    );
};

function HomeTourInfo({ info }) {
    const { country, title, image, cost } = info;
    return (
        <>
            <div className="card w-64 h-96" style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'none' }}>
                <div className="card-body">
                    <h2 className="card-title text-white text-4xl font-bold">{country}</h2>
                    <p className='text-white text-2xl'>{title}</p>
                    <div className="card-actions justify-center">
                        <button className="btn btn-primary">${cost}</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeBanner;