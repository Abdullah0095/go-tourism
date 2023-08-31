import React from 'react';
import background from "../../assets/images/home-bg.jpg";
import fakeData from '../FakeData/FakeData';



const Home = () => {

    return (
        <div className='h-[800px]' style={{ backgroundImage: `url(${background})`, backgroundRepeat: 'none' }}>
            <div className='py-24'>
                <h1 className='font-serif text-8xl font-bold mt-24 lg:ml-48'>Travel & Explore <br /> the World</h1>
                <p className='text-gray text-xl py-3 lg:ml-48'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <br /> Delectus dolores vero optio eaque hic laborum, <br /> totam numquam magni? Laborum, reiciendis.</p>
                <button className="btn btn-accent my-4 w-48 text-white lg:ml-48">BOOK MY TOUR</button>
            </div>
            <div className='flex justify-end -mt-9'>
                {
                    fakeData.map(info => <HomeTourInfo info={info} key={info.title}></HomeTourInfo>)
                }
            </div>

        </div>
    );
};

function HomeTourInfo({ info }) {
    const { country, title, image, cost } = info;
    return (
        <>
            <div className="card w-72 h-96 " style={{ backgroundImage: `url(${image})`, backgroundRepeat: 'none' }}>
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

export default Home;